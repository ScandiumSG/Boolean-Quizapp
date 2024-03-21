import "./LoginModal.css";
import { useState, useContext } from "react";
import { loginContext, userContext } from "@/contexts/contexts";
import { useNavigate } from "react-router-dom";
import { userHandlingUrl } from "@/utils/apiUtil";
import { addToSessionStorage } from "@/utils/userUtils";

const LoginModal = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const { showLogin, setShowLogin } = useContext(loginContext);
  const { setUser } = useContext(userContext);

  const handleChanges = (e) => {
    setLoginCredentials({ ...loginCredentials, [e.target.id]: e.target.value });
  };

  const submitLogin = async () => {
    const request = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
    };

    await fetch(userHandlingUrl, request)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid login credentials");
        }
      })
      .then((res) => {
        setUser({ ...res });
        addToSessionStorage(res);
      })
      .then(() => setShowLogin(false))
      .catch(() => setShowError(true));
  };

  return (
    <dialog open={showLogin} className="login-modal-container menu-panel">
      <h3>Login</h3>
      <br />
      <div className="login-fields-container">
        <div>
          <label htmlFor="login-modal-email">Email:</label>
          <br />
          <input type="email" id="email" name="login-modal-email" value={loginCredentials.email} onChange={(e) => handleChanges(e)} />
        </div>
        <div>
          <label htmlFor="login-modal-email">Password:</label>
          <br />
          <input type="password" id="password" name="login-modal-email" value={loginCredentials.password} onChange={(e) => handleChanges(e)} />
        </div>
      </div>
      <span className={showError ? "error-message-active" : "error-message-hidden"}>Invalid login credentials</span>
      <span
        className="register-button"
        onClick={() => {
          navigate("/register");
          setShowLogin(false);
        }}
      >
        Register new user
      </span>
      <div className="login-modal-button-container">
        <button onClick={() => submitLogin()}>
          <span>Login</span>
        </button>
        <button onClick={() => setShowLogin(false)}>
          <span>Cancel</span>
        </button>
      </div>
    </dialog>
  );
};

export default LoginModal;
