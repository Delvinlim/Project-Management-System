import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aos from "aos";
import SwiperCore, { Autoplay } from "swiper"
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/HomePage/Home";
import Dashboard from "./pages/DashboardPage/Dashboard";

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
        <Route exact path="/login" element={<Dashboard /> } />
      </Routes>
      {/* <Footer /> */}
      <ScrollToTop />
    </Router>
  );
}

export default App;
