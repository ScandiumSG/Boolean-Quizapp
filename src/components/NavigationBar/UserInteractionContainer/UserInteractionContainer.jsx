import { loginContext } from "@/contexts/contexts"
import "./UserInteractionContainer.css"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AccountIcon from "@/components/Common/AccountIcon/AccountIcon"

const UserInteractionContainer = ({ user }) => {
    const navigate = useNavigate()
    const { setShowLogin } = useContext(loginContext)

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
        <div className="right-navigation-container">
            <button 
                className="account-container-create-quiz" 
                onClick={() => navigate("/quiz/new")}
            >
                <span>Create quiz!</span>
            </button>
            <AccountIcon/>
        </div>
    )
}

UserInteractionContainer.propTypes = {
    user: PropTypes.object,
}

export default UserInteractionContainer