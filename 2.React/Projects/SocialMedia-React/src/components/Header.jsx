import "./header.css"
import Burgermenu from "./Burgermenu";
import { GiAlienBug} from 'react-icons/gi';
import { FiSearch} from 'react-icons/fi';
import { BiMessageSquareAdd} from 'react-icons/bi';
import { AiOutlineSetting,AiOutlineClose} from 'react-icons/ai';
import { IoMdNotifications} from 'react-icons/io';
import { GiHamburgerMenu} from 'react-icons/gi';
import { Link, NavLink } from "react-router-dom";
import profile1 from "../assets/profile1.jpg"
import { useState } from "react";
import Notification from "./Notification";
import Settings from "./Settings";
import Lightmode from "./Lightmode";

const Header = () => {

    const [burgerLink, showBurgerLink] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const showBurger = () => {
        showBurgerLink(prevState => !prevState)
    }
    const showNotify = () => {
        setShowNotification(prevState => !prevState)
    }
    const showSetting = () => {
        setShowSettings(prevState => !prevState)
    }

  return (
       <section className="header" >
         <div className="header__container">
              <div className="logo">
                  <Link to="/">            
                  <GiAlienBug className="bug" />
                  </Link>
                  <div className="header__search">
                        <FiSearch className="text-muted srh" />
                        <input type="text"
                           placeholder="Search"
                        />
                        </div>
              </div>
              <div className="profile__sec">
                       
                        <div className="navlinks">
                            <ul>
                                <li ><NavLink to="/profile" onClick={()=> showBurgerLink(false)}>Account</NavLink></li>
                                <li><NavLink to="network" onClick={()=> showBurgerLink(false)}>My Network</NavLink></li>
                            </ul>
                        </div>
                        <div className="create">
                            {/*
                                burgerLink ?   <button className="btn btn-primary burger" 
                                onClick={()=> showBurgerLink(false)}
                                ><AiOutlineClose className="cre "  /></button> :   <button className="btn btn-primary burger" 
                                onClick={showBurger}
                                ><GiHamburgerMenu className="cre "  /></button>
  */}
                        
                             <Lightmode />
                            <button className="btn btn-primary "
                              onClick={showSetting}
                            ><AiOutlineSetting className="cre"  /></button>
                            <button className="btn btn-primary "
                              onClick={showNotify}
                            ><IoMdNotifications className="cre"  /></button>
                        </div>
                        <Link to="/profile">
                        <div className="profile">
                            <img src={profile1} alt="" className="profile-picture" />
                        </div>
                        </Link>
              </div>
         </div>
         {
                            burgerLink && <Burgermenu />
                        }
                        {
                            showNotification && <Notification />
                        }
                        {
                            showSettings && <Settings />
                        }
       </section>
    )
}

export default Header