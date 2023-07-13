import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
import MoreCompanies from './components/home/anotherCompaniesLogo/MoreCompanies';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Announcements from './components/announcements/Announcements';
import TheClub from './components/club/TheClub';
import Owners from './components/club/Owners';
import TheManagers from './components/club/TheManagers';
import Squad from './components/squad/Squad';
import AcademyNews from './components/academy/AcademyNews';
import Under18 from './components/academy/Under18';
import upArrowImg from "./components/home/upArrow.png"

// squad banner img
import squadBGImg from "./components/squad/Banner.webp"
import Under15 from './components/academy/Under15';
import Under13 from './components/academy/Under13';
import SubscriptionPlan from './components/signUp/SubscriptionPlan';
import SignUp from './components/signUp/SignUp';
import T_C from './components/signUp/T_C';
import NewsDetails from './components/announcements/NewsDetails';
import getApiData from './GetApiFunc';
import { useEffect, useState } from 'react';
import StickyNavbar from './components/navbar/StickyNavbar';


function App() {
  const [studentsData, setStudentsData] = useState([]);
  const [showAfterScroll, setShowAfterScroll] = useState(false);

  useEffect(() => {
    // students data
    getApiData(`${process.env.REACT_APP_APIKEY}/api/v1/student`)
    .then(data=>setStudentsData(data))
  }, []);

  // scroll position
  window.addEventListener("scroll", ()=>{
    if(window.scrollY>300){
      setShowAfterScroll(true)
    }
    else{
      setShowAfterScroll(false)
    }
  })

  return (
    <>
      <BrowserRouter>
      {showAfterScroll?<StickyNavbar showAfterScroll={showAfterScroll} />:<Navbar />}
        
        
        
        

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/member-login/" element={<Login />} />

          <Route exact path="/topics/club-news/" element={<Announcements />} />
          <Route exact path="/topics/club-news/newsDetails/:newsId" element={<NewsDetails />} />
          
          <Route exact path="/club/" element={<TheClub />} />
          <Route exact path="/owners/" element={<Owners />} />
          <Route exact path="/managers/" element={<TheManagers />} />
          <Route exact path="/first-team/squad/" element={<Squad img={squadBGImg} />} />
          <Route exact path="/topics/academy/" element={<AcademyNews />} />
          <Route exact path="/academy/under-18/" element={<Under18 students={studentsData.filter(std=>std.category === "under18")} />} />
          <Route exact path="/academy/under-15/" element={<Under15 students={studentsData.filter(std=>std.category === "under15")} />} />
          <Route exact path="/academy/under-13/" element={<Under13 students={studentsData.filter(std=>std.category === "under13")} />} />

          {/* sign up */}
          <Route exact path="/subscription-plan/" element={<SubscriptionPlan />} />
          <Route exact path="/register/" element={<SignUp />} />
          <Route exact path="/member-tos-page/" element={<T_C />} />
        </Routes>

        {showAfterScroll &&  <img className='goToTopArrow' onClick={()=>window.scrollTo(0,0)} src={upArrowImg} alt="up arrow" />}

        <MoreCompanies />
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
