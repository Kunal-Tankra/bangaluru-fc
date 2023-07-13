import React from 'react'
import "./NewsChild.css"
import { NavLink } from 'react-router-dom'

const NewsChild = (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (

    <div className='newsChild_container'>
      <div className="newsChild_dateBox">
        <span>{months[props.month]}</span>
        <span className='date'>{props.date}</span>
      </div>
      <NavLink to={`topics/club-news/newsDetails/${props.id}`}>

        <p>{props.shortDec}</p>
      </NavLink>
    </div>
  )
}

export default NewsChild
