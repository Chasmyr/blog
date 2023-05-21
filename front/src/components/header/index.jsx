import { useEffect } from "react"
import "./style.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import { setUserInfo } from "../../slices/userSlice"

const Header = ({user = null, dispatch}) => {

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                dispatch(setUserInfo(userInfo))
            })
        })
    }, [])

    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        dispatch(setUserInfo(null))
    }

    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {user !== null ? (
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

export default connect(
    state => ({
        user: state.userReducer.userInfo
    })
)(Header)