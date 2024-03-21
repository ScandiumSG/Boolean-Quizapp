import "./NavigationBar.css";
import logoUrl from "@/assets/bob.png";
import { useContext } from "react";
import { userContext } from "@/contexts/contexts";
import { Link } from "react-router-dom";
import UserInteractionContainer from "./UserInteractionContainer/UserInteractionContainer";

const NavigationBar = () => {
  const { user } = useContext(userContext);

  return (
    <nav className="navigationbar-container">
      <Link to="/" className="logo-container">
        <h1 className="logo-text">Bob&apos;s</h1>
        <img src={logoUrl} className="logo-img" />
        <h1 className="logo-text">BrainBox</h1>
      </Link>
      <UserInteractionContainer user={user} />
    </nav>
  );
};

export default NavigationBar;
