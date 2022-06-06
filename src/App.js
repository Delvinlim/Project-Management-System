import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aos from "aos";
import SwiperCore, { Autoplay } from "swiper"
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/HomePage/Home";
import Dashboard from "./pages/DashboardPage/Dashboard";
import StudentLoginPage from "./pages/AuthenticationPage/StudentLoginPage";
import StudentRegisterPage from "./pages/AuthenticationPage/StudentRegisterPage";

function App() {
  useEffect(() => {
      Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
    
  SwiperCore.use([Autoplay]);
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/student/login" element={<StudentLoginPage /> } />
        <Route exact path="/student/register" element={<StudentRegisterPage /> } />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
      <ScrollToTop />
    </Router>
  );
}

export default App;
