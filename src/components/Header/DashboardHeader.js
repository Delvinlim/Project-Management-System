import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../../assets/img/favicon.png"

const DashboardHeader = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <LinkRouter to='/' className='logo d-flex align-items-center'>
          <img src={Logo} alt="Logo" className="img-fluid" />
          <span class="fs-4">Project</span>
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

              <LinkScroll className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-danger badge-number">5</span>
              </LinkScroll>
              {/* <!-- End Notification Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-dashboard-header">
                  You have 4 new notifications
                  <LinkScroll><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></LinkScroll>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger"></i>
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <LinkScroll>Show all notifications</LinkScroll>
                </li>

              </ul>
              {/* <!-- End Notification Dropdown Items --> */}

            </li>
            {/* <!-- End Notification Nav --> */}

            <li className="nav-item dropdown">

              <LinkScroll className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-danger badge-number">3</span>
              </LinkScroll>
              {/* <!-- End Messages Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-dashboard-header">
                  You have 3 new messages
                  <LinkScroll><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></LinkScroll>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <LinkScroll>
                    <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </LinkScroll>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <LinkScroll>
                    <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>6 hrs. ago</p>
                    </div>
                  </LinkScroll>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <LinkScroll>
                    <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                    <div>
                      <h4>David Muldon</h4>
                      <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                      <p>8 hrs. ago</p>
                    </div>
                  </LinkScroll>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <LinkScroll>Show all messages</LinkScroll>
                </li>

              </ul>
              {/* <!-- End Messages Dropdown Items --> */}

            </li>
            {/* <!-- End Messages Nav --> */}

            <li className="nav-item dropdown">

              <LinkScroll className='nav-link nav-profile d-flex align-items-center pe-0' data-bs-toggle='dropdown'>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGfLr-AIKkE6g/profile-displayphoto-shrink_200_200/0/1630215997768?e=1648080000&v=beta&t=7S8R-Gc63sCntOQwY-XgzkUnQEkrVKxqxKpZKM2vspA" alt="Profile" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">Delvin Lim</span>
              </LinkScroll>
              {/* <!-- End Profile Iamge Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-dashboard-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <LinkScroll className='dropdown-item d-flex align-items-center'>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </LinkScroll>
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