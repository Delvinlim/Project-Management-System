import React, { useState, useEffect } from 'react'
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import jwt_decode from 'jwt-decode';
import Logo from "../../assets/img/favicon.png"
import axios from "axios";

const DashboardHeader = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState('student');
  const [token, setToken] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);
  
  const refreshToken = async () => {
    try {
      let role = localStorage.getItem('role')
      if (role) {
        role = JSON.parse(role);
        const response = await axios.post('api/token', {role: role});
        setToken(response.data.accessToken)
        const decoded = jwt_decode(response.data.accessToken);
        
        if (role === "student") setName(decoded.studentName);
        if (role === "lecturer") setName(decoded.lecturerName);
        if (role === "admin") setName(decoded.adminName);
      }
    } catch (error) {
      navigate('/student/login')
    }
  }

  const Logout = async () => {
    try {
      await axios.delete('api/logout/student')
        .then(() => {
          localStorage.removeItem('role');
          navigate('/student/login')
        })
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <LinkRouter to='/' className='logo d-flex align-items-center'>
          <img src={Logo} alt="Logo" className="img-fluid" />
          <span className="fs-4">Project</span>
        </LinkRouter>
        
        {/* NAVIGATION */}
        <nav id="navbar" className={`navbar`}>
          <ul>
            <li><LinkScroll to='hero' activeClass='active' spy={true} className='nav-link'>Dashboard</LinkScroll></li>
            <li><LinkScroll to='about' activeClass='active' spy={true} className='nav-link'>Projects</LinkScroll></li>
            <li><LinkScroll to='services' activeClass='active' spy={true} className='nav-link'>Task</LinkScroll></li>
            {/* <LinkRouter to="/login" className='primary'>Login</LinkRouter> */}
          </ul>
          {/* <i className={`${isMobile ? "bi bi-list mobile-nav-toggle" : ""}`}></i> */}
          <i className={`bi bi-list mobile-nav-toggle`}></i>
        </nav>        
        {/* End Navigation */}
        
        {/* ICON NAVIGATION */}
        <nav className="dashboard-header-nav">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">

              <LinkScroll to='/' className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle='dropdown' style={{ cursor: 'pointer' }}>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGfLr-AIKkE6g/profile-displayphoto-shrink_200_200/0/1630215997768?e=1648080000&v=beta&t=7S8R-Gc63sCntOQwY-XgzkUnQEkrVKxqxKpZKM2vspA" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">{name}</span>
              </LinkScroll>
              {/* <!-- End Profile Image Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-dashboard-header">
                  <h6>{name}</h6>
                  {/* <span>{job}</span> */}
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <LinkRouter to='/profile' className='dropdown-item d-flex align-items-center'>
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>                    
                  </LinkRouter>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <button type="button" className="dropdown-item d-flex align-items-center" onClick={Logout}>
                    <i className="bi bi-box-arrow-right"></i>
                    {/* <button type="button" name="" id="" class="btn btn-block">Sign Out</button> */}
                    <span>Sign Out</span>
                  </button>
                  {/* <LinkScroll to='/' className='dropdown-item d-flex align-items-center' onClick={Logout}>
                  </LinkScroll> */}
                </li>

              </ul>
              {/* <!-- End Profile Dropdown Items --> */}
            </li>
            {/* <!-- End Profile Nav --> */}

          </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
        
      </div>

      {/* <i className={`bi bi-list mobile-nav-toggle ${mobileActive ? "bi-list bi-x" : ""}`} onClick={handleToggle}></i> */}

    </header>
  )
}


export default DashboardHeader