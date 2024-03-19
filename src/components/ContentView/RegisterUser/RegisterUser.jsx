import "./RegisterUser.css"
import { useState } from 'react'

const RegisterUser = () => {
    const [profileData, setProfileData] = useState({
        email: "",
        name: "",
        username: "",
    })
    const [errorMessage, setErrorMessage] = useState("")


    const handleChange = (e) => {
        setProfileData({...profileData, [e.target.id]: e.target.value})
    }

    const handleRegister = async () => {
        let error = ""
        if (profileData.email === "") {
            error = "Email address is required.\n"
        }
        if (profileData.username === "") {
            error += "Username is required.\n"
        }
        setErrorMessage(error)
        // TODO: Register user,
        // Must wait until backend supports users
    }

    return (
        <div className="register-user-container">
            <h3>Register new user account</h3>
            <div className="register-user-fields">
                <label>Email address*:</label>
                <input 
                    name="user_email"
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleChange(e)}
                />
                <label>Your name:</label>
                <input 
                    name="user_name"
                    id="name"
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleChange(e)}
                />
                <label>Username*:</label>
                <input 
                    name="user_username"
                    id="username"
                    type="text"
                    value={profileData.username}
                    onChange={(e) => handleChange(e)}
                    />
                {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                <button onClick={() => handleRegister()}>
                    <span>Register</span>
                </button>
            </div>
        </div>
    )
}

export default RegisterUser