import React from 'react'
import signUpBGImg from "./images/Website-Creative-1500x800-shop-3.webp"
import "./SignUp.css"
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className="login_BgImg">
                <img src={signUpBGImg} alt="img" />
            </div>

            {/* login box */}
            <div className='loginContainer'>
                <h1>Register</h1>



                <form className='signUpForm'>
                    <h5 >Disclaimer</h5>
                    <p>Overseas Members will have to provide an Indian Postal address for the delivery of their membership card and merchandise</p>
                    {/* form content */}
                    <div className="form-group formContent">
                        <div className="form-group col-md-12">
                            <label htmlFor="validationCustom01"> <span>*</span> First Name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" required />

                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="validationCustom02"> <span>*</span> Last name</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required />

                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="validationCustom021"> <span>*</span> Date of Birth</label>
                            <input type="date" className="form-control" id="validationCustom021" required />

                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="inputEmail4"> <span>*</span> Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputEmail42"> <span>*</span> Mobile Number</label>
                            <input type="number" className="form-control" maxLength={10} id="inputEmail42" placeholder="1234 567 890" required />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPassword4"> <span>*</span> Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" required />
                        </div>
                        <div className="ihc-strength-wrapper">
                            <ul className="ihc-strength">

                                <li className="point"></li>
                                <li className="point"></li>
                                <li className="point"></li>
                                <li className="point"></li>
                                <li className="point"></li>
                            </ul>
                            <div className="ihc-strength-label">
                            </div>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPassword5"> <span>*</span> Confirm Password</label>
                            <input type="password" className="form-control" id="inputPassword5" placeholder="Password" required />
                        </div>
                        <div className="ihc-strength-wrapper">
                            <ul className="ihc-strength">
                                <li className="point"></li>
                                <li className="point"></li>
                                <li className="point"></li>
                                <li className="point"></li>
                                <li className="point"></li>
                            </ul>
                            <div className="ihc-strength-label">
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress"> <span>*</span> Address Line 1</label>
                            <textarea type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2"> Address Line 2</label>
                            <textarea type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputState"> <span>*</span> Country</label>
                                <select id="inputState" className="form-control " required>
                                    <option selected>India</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputState2"> Polo Size</label>
                                <select id="inputState2" className="form-control ">
                                    <option selected>S</option>
                                    <option >M</option>
                                </select>
                            </div>
                        </div>

                        <a href='https://www.bengalurufc.com/wp-content/uploads/2020/09/tshart_size.jpeg' target='__black'> Generic Size Chart</a>

                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    <NavLink to="/member-tos-page/">
                                        Accept our Terms&Conditions
                                    </NavLink>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="signInBtn_container">
                        <button type="submit" className="signIn_btn">Register</button>

                    </div>
                </form>



            </div>
        </>
    )
}

export default SignUp
