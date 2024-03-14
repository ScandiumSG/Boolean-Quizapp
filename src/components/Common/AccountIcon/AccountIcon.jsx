import "./AccountIcon.css"
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

const AccountIcon = ({ user }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/profile")
    }

    return (
        <div className="account-icon-container" onClick={() => handleClick()}>
            {user.name.substring(0,1) + " " + user.name.split(" ")[1].substring(0,1)}
        </div>
    )
}

AccountIcon.propTypes = {
    user: PropTypes.object,
}

export default AccountIcon