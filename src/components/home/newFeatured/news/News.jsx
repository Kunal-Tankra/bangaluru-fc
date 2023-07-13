import React, { useEffect, useState } from 'react'
import "./News.css"
import NewsChild from './NewsChild'

const News = (props) => {
  const [showNewsData, setShowNewsData] = useState([]);

  // news range state
  const [newsRange, setNewsRange] = useState({
    start: 0,
    end: 4
  });

  // function to set data in state
  const handle_setShowNewsData = (start, end) => {
    setShowNewsData(props.announcements.filter((news, idx) => idx >= start && idx <= end))

  }

  useEffect(() => {
    // initially set 5 news data 
    handle_setShowNewsData(newsRange.start, newsRange.end)
  }, [props.announcements]);

  // prev btn function
  const handlePrevBtn = () => {
    const prevStart = newsRange.start - 5
    const prevEnd = newsRange.end - 5

    // seting next ranges
    setNewsRange({
      start: prevStart,
      end: prevEnd
    })

    // setting the next news data to show
    handle_setShowNewsData(prevStart, prevEnd)

  }

  // next btn function
  const handleNextBtn = () => {

    const nextStart = newsRange.start + 5
    const nextEnd = newsRange.end + 5

    // seting next ranges
    setNewsRange({
      start: nextStart,
      end: nextEnd
    })

    // setting the next news data to show
    handle_setShowNewsData(nextStart, nextEnd)
  }


  return (
    <div className='newsContainer'>
      {showNewsData.map((data) => {
        const uploadDate = new Date(data.uploadDate)
        const date = uploadDate.getDate()
        const month = uploadDate.getMonth()


        return <NewsChild key={data.id} id={data.id} date={date} month={month} shortDec={data.newsShortDesc} />
      })}


      <div className="news_next_prev_btnContainer">
        <button type="button" onClick={handlePrevBtn} class="btn btn-link" disabled={newsRange.start <= 0}>Prev</button>


        <button type="button" onClick={handleNextBtn} class="btn btn-link" disabled={newsRange.end >= props.announcements.length}>Next</button>

      </div>
    </div>
  )
}

export default News
