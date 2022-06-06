import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AuthenticationImage from "../../assets/img/1.png"
import '../../assets/css/authentication.css'

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [npm, setNpm] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const Register = async (e) => {
    e.preventDefault()
    try {
      await axios.post('api/register', {
        role: "student",
        name: name,
        npm: npm,
        email: email,
        password: password,
        confirmPassword: confirmPassword
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
        <form onSubmit={Register}>
          <div className="form-content">
            <div className="register-form">
              <div className="title">Register</div>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="text" placeholder="Enter your name" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>                
                <div className="input-box">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="text" placeholder="Enter your npm" name='npm' id='npm' value={npm} onChange={(e) => setNpm(e.target.value)} required />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" placeholder="Enter your email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-key"></i>
                  <input type="password" placeholder="Enter your password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}  required />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-key"></i>
                  <input type="password" placeholder="Re-enter your password" name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  required />
                </div>                
                
                {/* <div className="text"><a href="#">Forget Password?</a></div> */}
                <div className="button-input-box">
                  <button className='btn btn-save'>Submit</button>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
                <div className="text">already have an account? <label htmlFor="flip">Log In Now </label></div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p className="fs-3">{errorMessage}</p>
    </div>
  )
}

export default StudentRegister