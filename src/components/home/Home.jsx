import React from 'react'
import Carousel from './Carousel'
import "./Home.css"
import NewFeatured from './newFeatured/NewFeatured'
import Honours from './honours/Honours'
import Membership from "./Membership-Website-2.png"
import Videos from './Videos'

const Home = () => {
    
    return (
        <>
            <Carousel />
            <a className='membership_img' href="https://insider.in/hero-isl-2022-23--bengaluru-fc-membership-season-ticket/event" target='__blank'>
                <img  src={Membership} alt="membership background" />
            </a>
            <NewFeatured/>
            <Honours/>
            <Videos/>

        </>
    )
}

export default Home
