import "./LoginModal.css"
import { useState, useContext } from 'react'
import { loginContext, userContext } from "@/contexts/contexts"

const LoginModal = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        email: "", 
        password: ""
    })
    const [showError, setShowError] = useState(false)

    const { showLogin, setShowLogin } = useContext(loginContext)
    const { setUser } = useContext(userContext)


    const handleChanges = (e) => {
        setLoginCredentials({...loginCredentials, [e.target.id]: e.target.value})
    }

    const submitLogin = async () => {
        const request = {
            method: "POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginCredentials)
        }
        let res = await fetch("backend-url", request)
        if (res.status !== 200) {
            setShowError(true)
        } else {
            res = res.json()
            setUser({...res})
        }
    }

    console.log(showLogin)
    return (
        <dialog open={showLogin} className="login-modal-container">
            <h3>Login</h3><br/>
            <div className="login-fields-container">
                <div>
                    <label htmlFor="login-modal-email">
                        Email:
                    </label><br/>
                    <input 
                        type="email" 
                        id="email"
                        name="login-modal-email"
                        value={loginCredentials.email}
                        onChange={(e) => handleChanges(e)}
                    />
                </div>
                <div>
                    <label htmlFor="login-modal-email">
                        Password:
                    </label><br/>
                    <input 
                        type="password" 
                        id="password"
                        name="login-modal-email"
                        value={loginCredentials.password}
                        onChange={(e) => handleChanges(e)}
                    />
                </div>
            </div>
            <span className={showError ? "error-message-active": "error-message-hidden"}>Invalid login credentials</span>
            <div className="login-modal-button-container">
                    <button onClick={() => submitLogin()}>
                        <span>Login</span>
                    </button>
                    <button onClick={() => setShowLogin(false)}>
                        <span>Cancel</span>
                    </button>
            </div>
        </dialog>
    )
}

export default LoginModal