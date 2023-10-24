import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc } from "firebase/firestore"
import { getFirestore, doc, getDocs, getDoc, QueryLimitConstraint } from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyADFe89abhZyTAf-OfBdlxFXG9zp_bmA6I",
    authDomain: "foodpanda-24808.firebaseapp.com",
    projectId: "foodpanda-24808",
    storageBucket: "foodpanda-24808.appspot.com",
    messagingSenderId: "172545180925",
    appId: "1:172545180925:web:e06c398c9d04011ca86a94"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()
const db = getFirestore(app)

const restro_data = [
    {
        "restaurant_name": "Karachi Biryani House",
        "cuisine_type": "Pakistani",
        "address": {
            "street": "456 Food Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "78901"
        },
        "phone": "555-789-1234",
        "menu": [
            {
                "item": "Chicken Biryani",
                "price": 350
            },
            {
                "item": "Seekh Kebab",
                "price": 200
            },
            {
                "item": "Gulab Jamun",
                "price": 80
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 10:00 PM",
            "tuesday": "11:00 AM - 10:00 PM",
            "wednesday": "11:00 AM - 10:00 PM",
            "thursday": "11:00 AM - 10:00 PM",
            "friday": "11:00 AM - 11:00 PM",
            "saturday": "12:00 PM - 11:00 PM",
            "sunday": "12:00 PM - 9:00 PM"
        }
    },
    {
        "restaurant_name": "Spice of Lahore",
        "cuisine_type": "Indian",
        "address": {
            "street": "789 Spice Avenue",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "56789"
        },
        "phone": "555-234-5678",
        "menu": [
            {
                "item": "Paneer Tikka",
                "price": 250
            },
            {
                "item": "Butter Chicken",
                "price": 400
            },
            {
                "item": "Rasmalai",
                "price": 100
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Tandoori Delights",
        "cuisine_type": "Indian",
        "address": {
            "street": "123 Tandoori Lane",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "45678"
        },
        "phone": "555-876-5432",
        "menu": [
            {
                "item": "Naan",
                "price": 40
            },
            {
                "item": "Tandoori Chicken",
                "price": 300
            },
            {
                "item": "Gajar Halwa",
                "price": 120
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 8:00 PM",
            "tuesday": "12:00 PM - 8:00 PM",
            "wednesday": "12:00 PM - 8:00 PM",
            "thursday": "12:00 PM - 8:00 PM",
            "friday": "12:00 PM - 9:00 PM",
            "saturday": "1:00 PM - 9:00 PM",
            "sunday": "1:00 PM - 7:00 PM"
        }
    },
    {
        "restaurant_name": "The Seafood Shack",
        "cuisine_type": "Seafood",
        "address": {
            "street": "789 Coastal Road",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "34567"
        },
        "phone": "555-987-6543",
        "menu": [
            {
                "item": "Grilled Fish",
                "price": 400
            },
            {
                "item": "Shrimp Scampi",
                "price": 350
            },
            {
                "item": "Lobster Bisque",
                "price": 180
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 9:00 PM",
            "tuesday": "11:00 AM - 9:00 PM",
            "wednesday": "11:00 AM - 9:00 PM",
            "thursday": "11:00 AM - 9:00 PM",
            "friday": "11:00 AM - 10:00 PM",
            "saturday": "12:00 PM - 10:00 PM",
            "sunday": "12:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Mughal Garden",
        "cuisine_type": "Mughlai",
        "address": {
            "street": "34 Mughal Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "23456"
        },
        "phone": "555-345-6789",
        "menu": [
            {
                "item": "Mutton Korma",
                "price": 280
            },
            {
                "item": "Biryani",
                "price": 320
            },
            {
                "item": "Jalebi",
                "price": 80
            }
        ],
        "opening_hours": {
            "monday": "11:30 AM - 9:30 PM",
            "tuesday": "11:30 AM - 9:30 PM",
            "wednesday": "11:30 AM - 9:30 PM",
            "thursday": "11:30 AM - 9:30 PM",
            "friday": "11:30 AM - 10:30 PM",
            "saturday": "12:30 PM - 10:30 PM",
            "sunday": "12:30 PM - 8:30 PM"
        }
    },
    {
        "restaurant_name": "Sushi Palace",
        "cuisine_type": "Japanese",
        "address": {
            "street": "567 Sushi Lane",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "12345"
        },
        "phone": "555-123-4567",
        "menu": [
            {
                "item": "Sashimi Platter",
                "price": 450
            },
            {
                "item": "Tempura Udon",
                "price": 350
            },
            {
                "item": "Green Tea Ice Cream",
                "price": 90
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Pizza Haven",
        "cuisine_type": "Italian",
        "address": {
            "street": "789 Pizza Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "67890"
        },
        "phone": "555-678-9012",
        "menu": [
            {
                "item": "Margherita Pizza",
                "price": 300
            },
            {
                "item": "Pepperoni Pizza",
                "price": 350
            },
            {
                "item": "Tiramisu",
                "price": 150
            }
        ],
        "opening_hours": {
            "monday": "11:00 AM - 9:00 PM",
            "tuesday": "11:00 AM - 9:00 PM",
            "wednesday": "11:00 AM - 9:00 PM",
            "thursday": "11:00 AM - 9:00 PM",
            "friday": "11:00 AM - 10:00 PM",
            "saturday": "12:00 PM - 10:00 PM",
            "sunday": "12:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Falafel Express",
        "cuisine_type": "Middle Eastern",
        "address": {
            "street": "101 Falafel Avenue",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "34512"
        },
        "phone": "555-345-6789",
        "menu": [
            {
                "item": "Falafel Wrap",
                "price": 180
            },
            {
                "item": "Hummus Plate",
                "price": 150
            },
            {
                "item": "Baklava",
                "price": 70
            }
        ],
        "opening_hours": {
            "monday": "11:30 AM - 9:00 PM",
            "tuesday": "11:30 AM - 9:00 PM",
            "wednesday": "11:30 AM - 9:00 PM",
            "thursday": "11:30 AM - 9:00 PM",
            "friday": "11:30 AM - 10:00 PM",
            "saturday": "12:00 PM - 10:00 PM",
            "sunday": "12:00 PM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Café de Karachi",
        "cuisine_type": "Coffee, Snacks",
        "address": {
            "street": "23 Café Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "56789"
        },
        "phone": "555-567-1234",
        "menu": [
            {
                "item": "Espresso",
                "price": 120
            },
            {
                "item": "Croissant",
                "price": 80
            },
            {
                "item": "Cheesecake",
                "price": 150
            }
        ],
        "opening_hours": {
            "monday": "8:00 AM - 9:00 PM",
            "tuesday": "8:00 AM - 9:00 PM",
            "wednesday": "8:00 AM - 9:00 PM",
            "thursday": "8:00 AM - 9:00 PM",
            "friday": "8:00 AM - 10:00 PM",
            "saturday": "9:00 AM - 10:00 PM",
            "sunday": "9:00 AM - 8:00 PM"
        }
    },
    {
        "restaurant_name": "Chapli Kebab Corner",
        "cuisine_type": "Pakistani",
        "address": {
            "street": "786 Kebab Street",
            "city": "Karachi",
            "state": "SD",
            "postal_code": "67890"
        },
        "phone": "555-987-6543",
        "menu": [
            {
                "item": "Chapli Kebab",
                "price": 250
            },
            {
                "item": "Naan",
                "price": 40
            },
            {
                "item": "Kheer",
                "price": 100
            }
        ],
        "opening_hours": {
            "monday": "12:00 PM - 9:00 PM",
            "tuesday": "12:00 PM - 9:00 PM",
            "wednesday": "12:00 PM - 9:00 PM",
            "thursday": "12:00 PM - 9:00 PM",
            "friday": "12:00 PM - 10:00 PM",
            "saturday": "1:00 PM - 10:00 PM",
            "sunday": "1:00 PM - 8:00 PM"
        }
    }
]

function postRestaurants() {
    try {
        for (var i = 0; i < restro_data.length; i++) {
            const a = addDoc(collection(db, "restaurants"), restro_data[i])
        }
    } catch (e) {
        console.log(e.message)
    }
}
postRestaurants()

function signin() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

async function getRestaurants() {
    const querySnapshot = await getDocs(collection(db, "restaurants"));
    const restaurants = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        restaurants.push(data)
        console.log(restaurants)
    });
    return restaurants
}

async function getProductDetail(id) {
    const docRef = doc(db, "restaurants", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
    return docSnap.data()
}

export { signin, postRestaurants, getRestaurants, getProductDetail }