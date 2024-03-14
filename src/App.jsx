import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import ContentView from './components/ContentView/ContentView'
import { userContext } from '@/contexts/contexts'

function App() {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <>
    <userContext.Provider 
      value={{user: currentUser, setUser: setCurrentUser}}
    >
      <NavigationBar/>
      <ContentView />
    </userContext.Provider>
    </>
  )
}

export default App
