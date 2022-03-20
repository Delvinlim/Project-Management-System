import React from 'react';
import AboutImg from '../../assets/img/about-img.svg';

const About = () => {
  return (
      <section id="about" className="about">
        <div className="container">
          {/* <!-- Section Title --> */}
          <div className="section-title" data-aos="fade-up">
            <h2>About Us</h2>
            <p>We are team consist of 5 people which already an team from last semester, by that time we often encounter difficulty when its coming to manage our project, so we decide to build a project management system in purpose to manage our task easier, and to track down our task.</p>
          </div>

          {/* <!-- Content --> */}
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center about-img">
              <img src={AboutImg} className="img-fluid" alt="About Us" data-aos="fade-right" />
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <h2>Team<i className='bx bxs-hot' style={{ color: "red" }}></i></h2>
              <table style={{ width: "100%" }} className="mt-4">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">NPM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Augustino Sanduo</td>
                    <td>2131040</td>
                  </tr>
                  <tr>
                    <td>Delvin Lim</td>
                    <td>2131035</td>
                  </tr>
                  <tr>
                    <td>Jason Andrian</td>
                    <td>2131050</td>
                  </tr>
                  <tr>
                    <td>Jeffrey Andrian</td>
                    <td>2131048</td>
                  </tr>
                  <tr>
                    <td>Vincentius Junior Samudra</td>
                    <td>2131042</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>  
      </section>    
  )
}

export default About