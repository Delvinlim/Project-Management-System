import React from 'react';
import HeroImg from '../../assets/img/hero-img.svg';
import { Link as LinkScroll } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container"> 
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <div>
              <h1>Feeling hard to organize your group projects?</h1>
              <h2>No worries, we are here to help you maintain your group project task</h2>
              <LinkScroll to='about' offset={-40} activeClass='active' spy={true} className='btn btn-get-started'>Get Started</LinkScroll>
              {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
            <img src={HeroImg} className="img-fluid" alt="Team" />
          </div>
        </div>
      </div>
    </section>    
  )
}

export default Hero