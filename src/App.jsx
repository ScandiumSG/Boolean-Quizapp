import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ContentView from "./components/ContentView/ContentView";
import { userContext, loginContext } from "@/contexts/contexts";

const placeholderUser = {
  name: "Some Guy",
  email: "example@email.com",
  username: "iamverysmart",
};

function App() {
  const [currentUser, setCurrentUser] = useState(placeholderUser);
  const [showLoginModal, setShowLoginModal] = useState(true);

  return (
    <>
      <userContext.Provider
        value={{ user: currentUser, setUser: setCurrentUser }}
      >
      <loginContext.Provider
        value={{ showLogin: showLoginModal, setShowLogin: setShowLoginModal}}
      >
        <NavigationBar />
        <ContentView />
      </loginContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
