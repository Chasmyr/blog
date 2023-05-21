import { useEffect, useState } from "react"
import "./style.css"
import {Link} from "react-router-dom"

const Header = () => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                // ajouter l'username au redux
                console.log(userInfo)
                setUsername(userInfo.username)
            })
        })
    }, [])

    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUsername('')
    }

    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username.length > 1 ? (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout} >Logout</a>
                    </>
                )
                :
                (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header