import "./sidebar.css"
import profile1 from "../assets/profile1.jpg"
import Coverimg from "../assets/coverimg.jpg"
import { NavLink, Link } from "react-router-dom";
import { BsFillHouseFill, BsFillCalendarEventFill, BsFillChatDotsFill} from 'react-icons/bs';
import { FcBusinessman} from 'react-icons/fc';
import { AiOutlineGlobal, AiOutlineClose} from 'react-icons/ai';
import { IoIosNotifications, IoIosSettings} from 'react-icons/io';
import { motion } from "framer-motion";


const Loadvariants = {
  hidden: {x: "-100vw",
  },
  visible: { x: 0,
     transition: {
          type: "spring",
          duration: 1.5
     },
  }
}

const Sidebar = ({showProfile, setShowProfile}) => {
  return (
    <>
     <section className="sidebar">
     <div className="sidebar__container">
             <AiOutlineClose  
               className="sidebar__close"
               onClick={()=> setShowProfile(false)}
             />
             <Link to="profile">
        <div className="profile__img">
            <img src={Coverimg} alt="" className="coverimg" />
            <img src={profile1} alt="" className="profile-picture prof" />
        </div>
        </Link>
        <div className="sbout__profile">
        <Link to="profile">
            <span className="prof__name">Sam Lanson</span>
            </Link>
            <p className="text-muted descc">Web Develpor at Webestica</p>

            <p className="text-muted desc">I'd love to change the world, but they wont give me the source code.</p>
            <div className="followers__stats">
              <div className="stat">
                <span>256</span>
                <p className="text-muted">post</p>
              </div>
              <div className="stat">
                <span>2.5k</span>
                <p className="text-muted">Follwers</p>
              </div>
              <div className="stat staty">
                <span>365</span>
                <p className="text-muted">Following</p>
              </div>
            </div>
        </div>
        <div className="profile__links">
            <ul>
              <li><Link to="/"><BsFillHouseFill className="profile-link__icons"/>Feed</Link></li>
              <li><NavLink to=""><FcBusinessman className="profile-link__icons"/>Connections</NavLink></li>
              <li><NavLink to=""><AiOutlineGlobal className="profile-link__icons"/>Latest News</NavLink></li>
              <li><NavLink to=""><BsFillCalendarEventFill className="profile-link__icons"/>Events</NavLink></li>
              <li><NavLink to=""><BsFillChatDotsFill className="profile-link__icons"/>Groups</NavLink></li>
              <li><NavLink to=""><IoIosNotifications className="profile-link__icons"/>Notifications</NavLink></li>
              <li><NavLink to=""><IoIosSettings className="profile-link__icons"/>Settings</NavLink></li>
             
            </ul>
        </div>
        <Link to="profile" className="view__profile"> view profile </Link>
     </div>
 </section>


   {
     showProfile &&  <motion.section className="sideba mobile-sidebar"
     initial="hidden"
     animate="visible"
     exit={{
       x: "-100vw",
      transition:{ ease: 'easeInOut'}
     }}
     variants={Loadvariants}
     >
     <div className="sidebar__container">
             <AiOutlineClose  
               className="sidebar__close"
               onClick={()=> setShowProfile(false)}
             />
              <Link to="profile">
        <div className="profile__img">
            <img src={Coverimg} alt="" className="coverimg" />
            <img src={profile1} alt="" className="profile-picture prof" />
        </div>
        </Link>
        <div className="sbout__profile">
        <Link to="profile">
        <span className="prof__name">Sam Lanson</span>
        </Link>
            <p className="text-muted descc">Web Developer at Webestica</p>

            <p className="text-muted desc">I'd love to change the world, but they wont give me the source code.</p>
            <div className="followers__stats">
              <div className="stat">
                <span>256</span>
                <p className="text-muted">post</p>
              </div>
              <div className="stat">
                <span>2.5k</span>
                <p className="text-muted">Follwers</p>
              </div>
              <div className="stat staty">
                <span>365</span>
                <p className="text-muted">Following</p>
              </div>
            </div>
        </div>
        <div className="profile__links">
            <ul>
              <li><Link to="/"><BsFillHouseFill className="profile-link__icons"/>Feed</Link></li>
              <li><NavLink to=""><FcBusinessman className="profile-link__icons"/>Connections</NavLink></li>
              <li><NavLink to=""><AiOutlineGlobal className="profile-link__icons"/>Latest News</NavLink></li>
              <li><NavLink to=""><BsFillCalendarEventFill className="profile-link__icons"/>Events</NavLink></li>
              <li><NavLink to=""><BsFillChatDotsFill className="profile-link__icons"/>Groups</NavLink></li>
              <li><NavLink to=""><IoIosNotifications className="profile-link__icons"/>Notifications</NavLink></li>
              <li><NavLink to=""><IoIosSettings className="profile-link__icons"/>Settings</NavLink></li>
             
            </ul>
        </div>
        <Link to="profile" className="view__profile"> view profile </Link>
     </div>
 </motion.section>
 
   }
        {showProfile && <div className="overlay"
          onClick={()=> setShowProfile(false)}
        ></div>}

   </>
  )
}

export default Sidebar