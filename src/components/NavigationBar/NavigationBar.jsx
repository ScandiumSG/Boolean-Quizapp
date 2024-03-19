import AccountIcon from "../Common/AccountIcon/AccountIcon";
import "./NavigationBar.css";
import logoUrl from "@/assets/bob.png";
import { useContext } from "react";
import { userContext } from "@/contexts/contexts";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { user } = useContext(userContext);

  return (
    <div className="navigationbar-container">
      <Link to="/" className="logo-container">
        <h1 className="logo-text">Bob&apos;s</h1>
        <img src={logoUrl} className="logo-img" />
        <h1 className="logo-text">BrainBox</h1>
      </Link>
      <AccountIcon user={user} />
    </div>
  );
};

export default NavigationBar;
