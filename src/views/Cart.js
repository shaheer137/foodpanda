import { getProductDetail } from '../config/firebase'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Cart() {
    const [addItems, setAddItem] = useState([])

    return <div>
        <h1>Your cart is here</h1>
    </div>
}

export default Cart