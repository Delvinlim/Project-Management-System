import React from 'react'
import About from '../../components/About/About'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Reviews from '../../components/Reviews/Reviews'
import Services from '../../components/Services/Services'


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
    </>
  )
}

export default Home