import React from 'react'
import './Feature.css'
import BottomImgBox from './BottomImgBox'
import { useNavigate } from 'react-router-dom'

const Feature = (props) => {
    // props destructuring
    const { announcements } = props

    // navigate
    const navigate = useNavigate()

    // calculate days
    const uploadDate = new Date(announcements[0]?.uploadDate);
    const currDate = new Date();
    const diffTime = Math.abs(uploadDate - currDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    



    return (
        <div className='feature_container'>
            {/* top img box */}
            <div className="feature_top_imgBox">
                <img src={announcements[0]?.newsImage} alt="news" />
                <div className="feature_topImgBox_items">
                    <button type="button" onClick={()=>navigate(`/topics/club-news/newsDetails/${announcements[0]?.id}`)} className="btn btn-danger">MATCH REPORT</button>
                    <div className="feature_topImgBox_bottom">
                        <p>{announcements[0]?.newsShortDesc}</p>
                        <span>{diffDays} days ago</span>

                    </div>
                </div>
            </div>

            {/* bottom img container */}
            <div className="feature_bottom_imgContainer">
                <BottomImgBox announcement={announcements[1]} />
                <BottomImgBox announcement={announcements[2]} />
            </div>
        </div>
    )
}

export default Feature
