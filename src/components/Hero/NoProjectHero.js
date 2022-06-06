import React from 'react'

const NoProjectHero = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-left">Welcome! </h5>
            <p className="card-text">You don't have any active project yet!</p>
            <p id="create">Let's create a new one! </p>
            <a href="#" className="btn btn-create-project">Create Project</a>
            <iframe title='Animation' src="https://embed.lottiefiles.com/animation/64762"></iframe>
            <p className="key-p">Perhaps got an Project Key?</p>
            <div className="textbox">
              <label className="label" htmlFor="key"></label>
              <input className="input" autoComplete="off" placeholder="Your Key" style={{ width: '20rem' }} type="text" id="key" name="key"/><br />
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default NoProjectHero