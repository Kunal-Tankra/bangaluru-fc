import React, { useEffect, useState } from 'react'
import "./NewFeatured.css"
import Feature from "./Feature"
import News from './news/News'
import getApiData from '../../../GetApiFunc'

const NewFeatured = () => {
  const [announcements , setAnnouncements] = useState([]);

  useEffect(() => {
    getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/announcements`)
    .then(data=>setAnnouncements(data))
  }, []);


  return (
    <div className='newFeatured_container'>
      <Feature announcements={announcements}/>
      <News announcements={announcements}/>
    </div>
  )
}

export default NewFeatured
