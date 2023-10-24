import { useNavigate } from 'react-router-dom'
import { signin } from '../config/firebase'

function Signin() {
    const navigate = useNavigate()
    const login = async () => {
        try {
            await signin()

        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <div style={{ border: '1px solid deeppink', textAlign: 'center', height: '400px', width: '300px', margin: 'auto', marginTop: '10px', color: 'white', fontFamily: 'Arial', fontSize: 'x-large', backgroundColor: 'pink' }}>
            <h1>Welcome</h1>
            <h4>Login to Continue</h4>
            <button style={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', color: 'deeppink', margin: '30px', border: '1px solid deeppink' }} onClick={login}>Continue With Google</button>

        </div>
    )
}

export default Signin