import { loginContext } from "@/contexts/contexts"
import "./AccountIcon.css"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const AccountIcon = ({ user }) => {
    const navigate = useNavigate()
    const { setShowLogin } = useContext(loginContext)

    const handleClick = () => {
        navigate("/profile")
    }

    if (!user) {
        return (
            <div className="account-login-container">
                <button onClick={() => setShowLogin(true)}>
                    <span>Login</span>
                </button>
            </div>
        )
    }

    return (
        <div className="account-icon-container" onClick={() => handleClick()}>
            {user.username.substring(0,1).toUpperCase()}
        </div>
    )
}

AccountIcon.propTypes = {
    user: PropTypes.object,
}

export default AccountIcon