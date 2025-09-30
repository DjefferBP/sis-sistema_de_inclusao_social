import { BrowserRouter, Route, Routes, Navigate } from "react-router";


import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { About } from "./pages/About";

export function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />}/>
          <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
      </AppLayout> 
    </BrowserRouter>
  );
}
