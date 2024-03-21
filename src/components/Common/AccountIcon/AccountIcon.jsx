import { userContext } from "@/contexts/contexts"
import "./AccountIcon.css"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const AccountIcon = () => {
    const navigate = useNavigate()

    const { user } = useContext(userContext)

    const handleClick = () => {
        navigate("/profile")
    }

    return (
        <div className="account-icon-container" onClick={() => handleClick()}>
            {user.username.substring(0,1).toUpperCase()}
        </div>
    )
}

export default AccountIcon