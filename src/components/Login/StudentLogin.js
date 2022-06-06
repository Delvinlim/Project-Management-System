import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AuthenticationImage from "../../assets/img/1.png"
import '../../assets/css/authentication.css'

const StudentLogin = () => {
  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const Login = async (e) => {
    e.preventDefault()
    try {
      await axios.post('api/login', {
        role: "student",
        npm: npm,
        password: password
      })
        .then((response) => {
          if(response.status === 200) {
            localStorage.setItem('role', JSON.stringify("student"))
            navigate('/dashboard')
          }
        })
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
        console.log(error.response.data.message);
        console.log(error.response.status)
      }
    }
    // <input type="text" placeholder="Enter your npm" name='npm' id='npm' value={npm} onChange={(e) => setNpm(e.target.value)} required />
    // <input type="password" placeholder="Enter your password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}  required />
    // <button type="submit" className='btn btn-save'>Submit</button>
    
  }
  
  return (
    <div className='authentication'>
      <div className="container-authentication">
        <div className="cover">
          <div className="front">
            <img src={AuthenticationImage} alt="img 1" className='img-fluid'/>
          </div>
        </div>
        <form onSubmit={Login}>
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="text" placeholder="Enter your npm" name='npm' id='npm' value={npm} onChange={(e) => setNpm(e.target.value)} required />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-key"></i>
                  <input type="password" placeholder="Enter your password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}  required />
                </div>
                {/* <div className="text"><a href="#">Forget Password?</a></div> */}
                <div className="button-input-box">
                  <button className='btn btn-save'>Submit</button>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
                <div className="text">don't have an account? <label htmlFor="flip">Sign Up Now </label></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p className="fs-3">{errorMessage}</p>
    </div>
  )
}

export default StudentLogin