import { Outlet } from "react-router-dom"
import Header from "../components/header"
import "../global.css"
import "../styles/form.css"

const Layout = () => {


    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout