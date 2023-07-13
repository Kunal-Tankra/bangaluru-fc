import React from 'react'
import "./SubscriptionPlan.css"

// imgs
import bgImage from "./images/Website-Creative-1500x800-shop-2.webp"
import mamberShipImg from "./images/Membership-Polo-2.-999x462.webp"
import { useNavigate } from 'react-router-dom'

const SubscriptionPlan = () => {
    const navigate = useNavigate()

    // handle sign up btn
    const handleSignUp_btn = ()=>{
        navigate("/register/")
    }

    return (
        <>
            <div className="login_BgImg">
                <img src={bgImage} alt="img" />
            </div>

            {/* login box */}
            <div className='loginContainer'>
                <h1>Become an official BFC Member!</h1>

                <div className="memberShipContainer">
                    <img src={mamberShipImg} alt="img" />

                    <div className="digitalMembership_and_signUp">
                        <div className="memberShip_heading">Digital Membership</div>
                        <div className="memberShip_price">2999 Rs.</div>

                        <div className="memberShip_content">
                            <ul>
                                <li>Unique BFC Puma polo for members.</li>
                                <li>Flat 10% discount applicable on all purchases made on the BFC e-shop and Merchandise Partners</li>
                                <li>Live video interactions with first-team players through the season.</li>
                                <li>Virtual mid-season video conference with first-team players and the head coach.</li>
                                <li>Stand chance to win signed match-worn and regular player merchandise every month.</li>
                                <li>Special and extended content on BFC TV.</li>
                                <li>Postcards of the First Team Players.</li>
                                <li>Dedicated Instagram stories, along with a members-only group.</li>
                                <li>Official BFC Membership Card for the 2021-22 season.</li>
                                <li>Watch along the link for members to watch ISL games together.</li>
                                <li>Exclusive members-only merchandise for sale during the season.</li>
                                <li>Exclusive access to 2013-14 Bengaluru FC Retro Kit and other members-only merchandise on the club shop.</li>
                                <li>Validity - 31st May 2022</li>
                            </ul>
                        </div>
                        <div className='signUp_btn'>
                            <button type="button" onClick={handleSignUp_btn} class="btn btn-danger">Sign UP</button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default SubscriptionPlan
