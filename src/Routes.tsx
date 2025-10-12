import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { InitialPage } from "./pages/InitialPage";
import { useIsAuthenticated } from './shared/contexts/AuthContext';





export const AppRoutes = () => {
    const isAuthenticated = useIsAuthenticated()


    return (
        <BrowserRouter>
            {isAuthenticated && (
                <p>oi</p>
                 // <BrowserRouter>
                //   <AppLayout>
                //     <Routes>
                //       <Route path="/" element={<Home />}/>
                //       <Route path="/sobre" element={<About />}/>
                //       <Route path="*" element={<Navigate to='/' />}/>
                //       <Route path="/detalhe/:id" element={<Detail/>}/>
                //     </Routes>
                //   </AppLayout> 
                // </BrowserRouter>
            )}
            {
                !isAuthenticated && (
                    <Routes>
                        <Route path="/" element={<InitialPage />} />
                        <Route path="*" element={<Navigate to='/' />} />
                    </Routes>
                )
            }
        </BrowserRouter>
    );
}