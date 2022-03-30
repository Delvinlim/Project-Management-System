import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        {/* <!-- Section Title --> */}
        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Project Management System provide services to an university so that they can consider to encourage their student to use this system to manage all their project. UTS project? UAS project? everyweek Assignment project? no problem all can be handle by the system.</p>
        </div>
        
        {/* <!-- Content --> */}
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
            <div className="icon-box icon-box-color">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4 className="title"><a href="">Project Management</a></h4>
              <p className="description">With this system you don't need to afraid of managing project task with your teammates</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box icon-box-color">
              <div className="icon"><i className="bx bx-desktop"></i></div>
              <h4 className="title"><a href="">Real Time Monitoring</a></h4>
              <p className="description">System support real time monitoring by the lecturer to watch student project progress</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box icon-box-color">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">Fast Perfomance</a></h4>
              <p className="description">We do believe site performance is also very important, so don't worry about the performance!</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box icon-box-color">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4 className="title"><a href="">Easy Access</a></h4>
              <p className="description">We provide system with easy access, Access the system anywhere! anytime! no limitation! </p>
            </div>
          </div>
        </div>

        {/* Input Services */}
        {/* <div className="row align-items-center mt-3">
          <div className="col-md-3">
            <label for="inputReview" className="form-label">Any services that can build us better</label>
          </div>
          <div className="col-md-6">
            <input type="text" id="inputReview" className="form-control" />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-get-started">Submit</button>
          </div>
        </div> */}

      </div>
    </section>
  )
}

export default Services