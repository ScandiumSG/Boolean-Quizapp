import "./ProfileView.css";
import { useContext } from "react";
import { userContext } from "@/contexts/contexts";

const ProfileView = () => {
  const { user } = useContext(userContext);

  return (
    <div className="profile-view-container content-frame">
      <h2 className="page-header">Your Account</h2>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={user.username} disabled={true} />
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={user.name} disabled={true} />
      <label htmlFor="email">Email</label>
      <input id="name" type="email" value={user.email} disabled={true} />
    </div>
  );
};

export default ProfileView;
