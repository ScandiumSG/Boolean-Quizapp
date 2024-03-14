import "./AccountIcon.css"
import PropTypes from 'prop-types'

const AccountIcon = ({ user }) => {
    return (
        <div>
            {user.name.substring(0,1) + " " + user.name.split(" ")[1].substring(0,1)}
        </div>
    )
}

AccountIcon.propTypes = {
    user: PropTypes.object,
}

export default AccountIcon