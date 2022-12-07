import React from 'react'
import "./settings.css"
import {  Link } from "react-router-dom";
import { MdAccountCircle} from 'react-icons/md';
import { SiGnuprivacyguard} from 'react-icons/si';
import { BsFillQuestionCircleFill, BsHeadphones, BsFillEyeSlashFill} from 'react-icons/bs';
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <motion.section className='notify-page'
    initial={{y: "-50vh"}}
    animate={{y: 0}}
  >

   
      <div className="notify-container">
             <h1>Settings</h1>
             {
      <div className="notifydata-container">
      
               <div className="settings-subcont" >
                    <Link to="/profile"><MdAccountCircle className='shi'/>Account</Link>
                    <Link to="/"><BsFillEyeSlashFill className='shi'/>Appearance</Link>
                    <Link to="/"><SiGnuprivacyguard className='shi'/>Privacy & Security</Link>
                    <Link to="/"><BsHeadphones className='shi'/>Help & Support</Link>
                    <Link to="/"><BsFillQuestionCircleFill className='shi'/>About</Link>
                
               </div>
       
     
  </div>
    }
           
      </div>
  </motion.section>
  )
}

export default Settings