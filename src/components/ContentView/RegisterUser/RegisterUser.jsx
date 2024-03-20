import { userRegisterUrl } from "@/utils/apiUtil"
import "./RegisterUser.css"
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { loginContext } from "@/contexts/contexts"

const RegisterUser = () => {
    const [profileData, setProfileData] = useState({
        email: "",
        username: "",
        password: "",
        role: 0,
    })
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const { setShowLogin } = useContext(loginContext)

    const handleChange = (e) => {
        setProfileData({...profileData, [e.target.id]: e.target.value})
    }

    const handleRegister = async () => {
        let error = ""
        let errorTriggered = false
        if (profileData.email === "") {
            error = "Email address is required.\n"
            errorTriggered = true
        }
        if (profileData.username === "") {
            error += "Username is required.\n"
            errorTriggered = true
        }
        if (profileData.password.length < 6) {
            error += "Password must be atleast 6 characters.\n"
            errorTriggered = true
        }
        if (errorTriggered) {
            setErrorMessage(error)
            return;
        }

        const request = {
            method: "POST", 
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profileData)
        }

        await fetch(userRegisterUrl, request)
            .then((res) => {
                if (res.ok) {
                    navigate("/quiz")
                    setShowLogin(true)
                    return res.json()
                } else {
                    console.log(res.json())
                    throw new Error("Could not register user", res)
                }
            })
            .catch((error) => console.log(error))

        // TODO: Register user,
        // Must wait until backend supports users
    }

    return (
        <div className="register-user-container">
            <h2>Register new user account</h2>
            <div className="register-user-fields">
                <label>Email address*:</label>
                <input 
                    name="user_email"
                    id="email"
                    type="email"
                    value={profileData.email}
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
                <label>Your password:</label>
                <input 
                    name="user_password"
                    id="password"
                    type="password"
                    value={profileData.password}
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