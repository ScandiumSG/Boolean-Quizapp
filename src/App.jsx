import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ContentView from "./components/ContentView/ContentView";
import { userContext, loginContext } from "@/contexts/contexts";
import { readSessionStorage } from "./utils/userUtils";


function App() {
  const [currentUser, setCurrentUser] = useState(readSessionStorage());
  const [showLoginModal, setShowLoginModal] = useState(false);

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
