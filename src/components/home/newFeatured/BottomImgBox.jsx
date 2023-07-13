import React from 'react'
import "./BottomImgBox.css"
import { NavLink } from 'react-router-dom';

const BottomImgBox = (props) => {
  // props destructuring
  const { announcement } = props


  // calculate days
  const uploadDate = new Date(announcement?.uploadDate);
  const currDate = new Date();
  const diffTime = Math.abs(uploadDate - currDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className='bottomImgBox_container'>
      <div className="bottomImgBox_imgContainer">

        <img src={announcement?.newsImage} alt="news" />
      </div>

      <div className='bottomImgBox_bottomItems' >
        <p>{announcement?.newsShortDesc}</p>
        <div className='itemsContainer'>
          <span>{diffDays} days ago</span>
          <NavLink to={`/topics/club-news/newsDetails/${announcement?.id}`} className='linkBtn' >MATCH REPORT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default BottomImgBox
