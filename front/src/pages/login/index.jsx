import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { setUserInfo } from "../../slices/userSlice"
import { connect } from "react-redux"

const Login = ({dispatch}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loginOnSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        if(response.ok) {
            response.json().then( userInfo => {
                dispatch(setUserInfo(userInfo))
                navigate('/')
            })
        } else {
            alert('wrong credentials')
        }
    }

    return (
        <form className="login" onSubmit={loginOnSubmit}>
            <h1>Login</h1>
            <input  type="text" 
                    placeholder="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
            <input  type="password" 
                    placeholder="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            <button>
                Login
            </button>
        </form>
    )
}

export default connect()(Login)