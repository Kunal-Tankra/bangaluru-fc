import React from 'react'
import theClubBGImg from "./images/Web-Banner-2.webp"
import Honours from "../home/honours/Honours"
import "./TheClub.css"

const TheClub = () => {
    return (
        <>
            <div className="login_BgImg">
                <img src={theClubBGImg} alt="background" />
            </div>

            <div className='loginContainer theClubContainer'>
                <h1>Bengaluru Football Club</h1>

                <h3>Who We Are</h3>
                <p>Formed in 2013 with a mission to contribute in putting India on the footballing world map, Bengaluru Football Club is owned by the JSW Group and plays its home games out of the Sree Kanteerava Stadium. After a successful debut season in which the team claimed a historic championship, the club moved out of the Bangalore Football Stadium to play at the 24,000 capacity Kanteerava Stadium, finishing runners up in the League and winning the Federation Cup in only its second season.</p>
                
                <p>By virtue of winning the I-League in the 2013-14 season, Bengaluru FC represented India in Asian competition, first in the playoff round of the AFC Champions League and then in the AFC Cup where they gave a good account of themselves, making it up to the Round of 16.</p>

                <p>In their third season, the Blues reclaimed the I-League title and went on to become the first ever Indian club to make it to the final of the AFC Cup, going down 1-0 to Air Force Club in Doha. The club won its second Federation Cup title in 2017, before making the move to the Indian Super League where it finished runners-up in the 2017-18 season. The Blues capped off the season winning the inaugural Super Cup to make it five trophies in five years</p>

                <h3>What We Stand For</h3>
                <p>Nicknamed <strong>‘The Blues’</strong>, Bengaluru FC is a club of and for the fans and we always take their support with us wherever we go. We strive hard to excel on the field and off it too. Our focus has always been to shape the future of Indian football by playing the brand of football we do and more importantly, by preparing the next line of professional footballers through our youth academy.</p>

                {/* honours */}
                <Honours width={"100%"} />

                

            </div>
        </>
    )
}

export default TheClub
