import { useNavigate } from 'react-router-dom'
import { getRestaurants } from "../config/firebase"
import { useState, useEffect } from 'react'

function Dashboard() {
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const addData = await getRestaurants()
        setRestaurants(addData)
        setLoading(false)
    }

    return (
        <div>
            <div style={{ display: 'flex', fontSize: 'x-large', color: 'deeppink' }}>
                <h1>It's the food and groceries you love, delivered</h1>
                <img width={500} src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-pk.png?width=1264" />
            </div>
            {loading ? <center><img src="https://i.gifer.com/ZKZg.gif" width='20' /></center> : restaurants.map(item => {
                return <div onClick={() => navigate('/' + item.id)} style={{ display: "inline-block", width: '27%', border: '1px solid black', borderRadius: 14, margin: '25px', height: '100%', padding: '5px', backgroundColor: 'pink', textAlign: 'center', color: 'black' }}>
                    <h2>{item.restaurant_name}</h2>
                    <h4>Contact: {item.phone}</h4>
                    <h4>{item.cuisine_type}</h4>
                    <h4>{item.address.city}</h4>
                </div>
            })}
        </div>
    )
}

export default Dashboard