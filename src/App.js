import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aos from "aos";
import SwiperCore, { Autoplay } from "swiper"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
