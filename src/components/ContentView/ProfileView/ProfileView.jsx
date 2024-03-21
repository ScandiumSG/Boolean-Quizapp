import "./ProfileView.css";
import { useContext, useEffect } from "react";
import { loginContext, userContext } from "@/contexts/contexts";
import { useNavigate } from "react-router-dom";

const ProfileView = () => {
  const { user, setUser } = useContext(userContext);
  const { setShowLogin } = useContext(loginContext);
  const navigate = useNavigate();

  const onLogOut = () => {
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (!user || user === null) {
      setShowLogin(true);
    }
  }, []);

  if (!user) {
    return <div> Loading ...</div>;
  }

  return (
    <>
      <h2 className="menu-header">Account Info</h2>
      <div className="menu-panel">
        <div className="profile-view-container">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={user.username} disabled={true} />
          <label htmlFor="email">Email</label>
          <input id="name" type="email" value={user.email} disabled={true} />
          <button id="logout-btn" onClick={onLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
