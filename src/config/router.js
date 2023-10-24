import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Signin from "../views/Signin";
import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Cart from "../views/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "/cart",
                element: <Cart />
            }

        ]
    }
])
function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()
    return <div>
        <div style={{ display: 'flex', backgroundColor: 'white', border: '1px solid deeppink ', color: 'deeppink' }}>
            <img width='30px' src="https://images.deliveryhero.io/image/foodpanda/groceries-landing/pandamart.png" /><h3 style={{ color: 'deeppink', margin: '30px' }}>Foodpanda</h3>
            <h4 style={{ color: 'deeppink', margin: '30px' }}> Location: Karachi</h4>
            <button style={{ backgroundColor: 'deeppink', padding: '10px', borderRadius: '10px', color: 'white', margin: '30px', border: '1px solid deeppink' }} onClick={() => navigate('/signin')}>Sign in </button>
            <button style={{ backgroundColor: 'deeppink', padding: '10px', borderRadius: '10px', color: 'white', margin: '30px', border: '1px solid deeppink' }} onClick={() => navigate('/')}>Restaurants </button>
            <img style={{ marginLeft: '700px' }} width='30px' src="https://us.123rf.com/450wm/cowpland/cowpland1412/cowpland141200124/34886261-shopping-cart-icon-modern-flat-design.jpg?ver=6" />

        </div>

        <div>

        </div>
        <Outlet />

    </div>
}

export default Router