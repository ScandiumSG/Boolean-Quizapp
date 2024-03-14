import AccountIcon from "../Common/AccountIcon/AccountIcon"
import "./NavigationBar.css"
import { useContext } from "react"
import { userContext } from "@/contexts/contexts"

const NavigationBar = () => {
    const { user } = useContext(userContext)

    return (
        <div className="navigationbar-container">
            <div>Hello</div>
            <div>Hello</div>
            <AccountIcon user={user}/>
        </div>
    )
}

export default NavigationBar