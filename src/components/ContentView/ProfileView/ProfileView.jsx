import "./ProfileView.css"
import { useContext } from "react"
import { userContext } from "@/contexts/contexts"

const ProfileView = () => {
    const { user } = useContext(userContext)

    return (
        <div className="profile-view-container">
            <p>
                Hello, this is the profile page for {user.name}
            </p>
        </div>
    )
}

export default ProfileView