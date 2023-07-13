import React from 'react'
import loginBG from "./LOG-IN1.webp"
import "./Login.css"
import { Lock, Person } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="login_BgImg">
        <img src={loginBG} alt="img" />
      </div>

      {/* login box */}
      <div className='loginContainer'>
        <h1>Member Login</h1>

        <form>
          <div className="loginName">
            <Person/>
            <input type="text" name='name' placeholder='Username' />
          </div>
          <div className="loginPassword">
            <Lock/>
            <input type="password" name='password' placeholder='Password' />
          </div>

          <div className='login_afterInputs'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
              </div>
            

            <div className='lostYourPass_Div'>
              <a href="#!">Lost your password?</a>
            </div>
          </div>

          <button className='loginBtn' type="button" >LOG IN</button>

          <div className="text-center">
            <p>Dont have an account? <NavLink to="/subscription-plan/">Sign Up</NavLink></p>

          </div>
        </form>

      </div>
    </>
  )
}

export default Login
