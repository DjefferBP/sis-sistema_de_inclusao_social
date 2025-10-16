import { Outlet } from "react-router"
import HeaderLayout from "../components/HeaderLayout"
import LandingPage from "../components/LandingPage"
import Footer from "../components/Footer"
import AboutCards from "../components/AboutCards"



export const InitialPage = () => {


    return (
        <div className="initial-page">
            <div className="initial-header">
                <HeaderLayout />
            </div>
            <div className="initial-content">
                <Outlet />
                <LandingPage/>
                <AboutCards/>
            </div>
            <div className="initial-footer">
                <Footer />
            </div>
        </div>
    )
}