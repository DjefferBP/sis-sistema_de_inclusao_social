import { Outlet } from "react-router"
import HeaderLayout from "../components/HeaderLayout"
import LandingPage from "../components/LandingPage"
import Footer from "../components/Footer"



export const InitialPage = () => {


    return (
        <div className="initial-page">
            <div className="initial-header">
                <HeaderLayout />
            </div>
            <div className="initial-content">
                <Outlet />
                <LandingPage/>
                
            </div>
            <div className="initial-footer">
                <Footer />
            </div>
        </div>
    )
}