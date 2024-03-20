import "./ProfileView.css";
import { useContext } from "react";
import { userContext } from "@/contexts/contexts";

const ProfileView = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <h2 className="menu-header">Account Info</h2>
      <div className="menu-panel">
        <div className="profile-view-container">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            disabled={true}
          />
          <label htmlFor="email">Email</label>
          <input id="name" type="email" value={user.email} disabled={true} />
        </div>
      </div>
    </>
  );
};

export default ProfileView;
