import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../config/firebase'
import { useNavigate } from 'react-router-dom'


function Detail() {
    const [details, setDetails] = useState([])
    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

    useEffect(() => {
        productDetail()
    }, [])

    const productDetail = async () => {
        const addData = await getProductDetail(id)
        console.log('d', addData)
        setDetails(addData)
    }
    console.log('detail --> ', details)

    return (

        <div>
            <div style={{ color: 'black', border: '1px solid black', margin: '18px', height: '100%', padding: '20px', backgroundColor: 'pink', width: '100%', textAlign: 'center' }}>
                <h1>{details.restaurant_name}</h1>
                <h3>Contact: {details.phone}</h3>
                <h4>Postal Code: {details.address.postal_code}</h4>
                <h4>Address: {details.address.street}</h4>
                <h4>{details.cuisine_type}</h4>
            </div>

            <div style={{ color: 'deeppink' }}>
                <h1 style={{ margin: '15px' }}>MENU:</h1>
                {details.menu.map(item => {
                    return <div style={{ display: "inline-block", width: '29%', border: '1px solid black', margin: '20px', height: '100%', padding: '5px', backgroundColor: 'white', textAlign: 'center' }}>
                        <h2 >{item.item}</h2>
                        <h2 >Rs.{item.price}</h2>
                        <button style={{ backgroundColor: 'pink', padding: '10px', borderRadius: '10px', color: 'white', margin: '30px', border: '1px solid pink' }} onClick={() => navigate('/cart')}>Add to cart</button>
                    </div>
                })}
            </div>

            <div style={{ border: '1px solid black', margin: '10px', height: '100%', padding: '10px', backgroundColor: 'pink', width: '100%', textAlign: 'center', display: 'flex', color: 'white' }}>
                <h5 style={{ margin: '20px' }}>OPENING HOURS:</h5>
                <h5 style={{ margin: '20px' }}>Monday: <br /> {details.opening_hours.monday}</h5>
                <h5 style={{ margin: '20px' }}>Tuesday: <br />  {details.opening_hours.tuesday}</h5>
                <h5 style={{ margin: '20px' }}>Wednesday: <br />  {details.opening_hours.wednesday}</h5>
                <h5 style={{ margin: '20px' }}>Thursday: <br />  {details.opening_hours.thursday}</h5>
                <h5 style={{ margin: '20px' }}>Friday: <br />  {details.opening_hours.friday}</h5>
                <h5 style={{ margin: '20px' }}>Saturday:<br />  {details.opening_hours.saturday}</h5>
                <h5 style={{ margin: '20px' }}>Sunday:<br />  {details.opening_hours.sunday}</h5>
            </div>

        </div>
    )
}

export default Detail