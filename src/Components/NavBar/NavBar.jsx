import React from 'react'
import './Styles.css'
import { useUserAuth } from '../../Context/UserAuthContext'


const NavBar = () => {
    const { user,logOut } = useUserAuth()
    const handleLogout = async() => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <nav>
            <h1>Text Summariser</h1>
            <ul>
                <li title='Username'><span>{user && user.email}</span></li>
                <li title='Logout'><button onClick={handleLogout} id='logout-button'><i className="ri-logout-box-r-line"></i></button></li>
            </ul>
        </nav>
    )
}

export default NavBar