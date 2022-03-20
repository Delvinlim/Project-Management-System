import React, { useState } from 'react'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);
  
  const scrollButton = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button onClick={scrollButton} style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? '1' : '0' }} className='back-to-top d-flex align-items-center justify-content-center'><i className="bi bi-arrow-up-short"></i></button>
    </>
  )
}

export default ScrollToTop