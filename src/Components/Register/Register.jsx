import React, { useState } from 'react'
import './Styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../Context/UserAuthContext'




const Register = () => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signUp } = useUserAuth()
    let navigate = useNavigate()

    const validateEmail = (Email) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(Email)) {
            const err_msg = "Enter Valid Email"
            setError(err_msg)
            return false
        }
        else
            return true

    }

    let validEmail = true

    const handleSubmit = async (e) => {
        e.preventDefault();

        validEmail = validateEmail(Email)
        console.log(validEmail)

        if (validEmail) {
            setError("");
            console.log(Email)
            console.log(Password)
            try {
                await signUp(Email, Password);
                navigate("/");
            } catch (err) {
                setError(err.message);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} id='registeration-form'>
                <h1>Register</h1>
                {error && <p className='error-msg'>{error}</p>}
                <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} /><br />
                <input type="password" placeholder='Password' minLength={8} onChange={(e) => { setPassword(e.target.value) }} /><br />
                <button type='submit'>Sign Up</button>
            </form>
            <div className="link-container">
                <p>Already Registered ? <Link to="/">Sign In</Link></p>
            </div>
        </>
    )
}

export default Register