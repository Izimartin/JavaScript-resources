import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Friends from "../components/Friends"
import Feeds from "../components/Feeds"
import './home.css'
import { useState } from "react"

const Home = () => {

  const [showProfile, setShowProfile] = useState(false)

  

  return (
     <>
       <Header />
         <div className="body__container">
         <Sidebar  showProfile={showProfile} setShowProfile={setShowProfile}/>
         <Feeds  showProfile={showProfile} setShowProfile={setShowProfile}/>
         <Friends />
         </div>
         
     </>
  )
}

export default Home