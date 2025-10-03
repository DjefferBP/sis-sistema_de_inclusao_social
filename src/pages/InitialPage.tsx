import { Outlet } from "react-router"
import HeaderLayout from "../components/HeaderLayout"





export const InitialPage = () => {


    return (
        <div className="initial-page">
            <div className="initial-header">
                <HeaderLayout />
            </div>
            <div className="initial-content">
                <Outlet />
            </div>
        </div>
    )
}