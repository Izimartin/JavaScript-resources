import React, { useState } from 'react'
import './myprofile.css'
import Myprofiledetail from "./Myprofiledetail"
import { IoIosArrowBack} from 'react-icons/io';
import { AiFillEdit} from 'react-icons/ai';
import { CgProfile} from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Header from "../components/Header"
import { motion } from 'framer-motion';

const Loadvariants = {
  hidden: { 
    x: "150vw"
  },
  visible: { 
    x: "0vw",
     transition: {
          type: "spring",
          duration: 0.5
     }
  }
}

const Myprofile = () => {

  const [myProfile, setMyProfile] = useState(Myprofiledetail)

  return (
    <>
    <Header />
    <motion.section className='profile__page'
     initial="hidden"
     animate="visible"
     exit={{
      x: "-100vw",
     transition:{ ease: 'easeInOut'}
    }}
     variants={Loadvariants}
    >
        <div className="profile__container">
            <div className="profile__overlay"></div>

            {
                myProfile.map((profile) => {
                    const {profileimg, postimg, profilename, id, jobTitle, desc, post, following, followers} = profile
                    return(
                        <div className="myprofile__body" key={id}>
                           <div className="myprofile__background">
                             <div className="myprofile__overlay"></div>
                             <Link to="/">
                          <IoIosArrowBack className='myProfile__icon'/>
                          </Link>
                            <img src={profileimg} alt="" />
                          </div>   
                          <div className="myprofile__card">
                                      <img src={profileimg} alt="" className='profile-picture2 myprofile--pic'/>
                                   
                                   <div className="top--prodile">
                                   <p className='myprofilename'>{profilename}</p>
                                     <p className='myprofiletitle'>{jobTitle}</p>
                                   </div>

                                     <div className="profile__info">
                                    <div className="profile__infoo">
                                            <p >Posts</p>
                                            <p className='inf'>{post}</p>
                                          </div>
                                    <div className="profile__infoo">
                                            <p>Followers</p>
                                            <p className='inf'>{followers}k</p>
                                          </div>
                                    <div className="profile__infoo">
                                            <p>Following</p>
                                            <p className='inf'>{following}</p>
                                          </div>
                                     </div> 
                                     <p className='profile--desc'>{desc}</p>
  

                       <div className="profile__buttons">
                         <button className='btn btn-primary prof-btn'>
                           Change Profile <CgProfile className='profilebtn__icon'/>
                         </button>
                         <button className='btn prof-btn'>
                           Edit <AiFillEdit className='profilebtn__icon'/>
                         </button>
                       </div>


                          </div>
                              
                              
                        </div>
                    )
                })
            }
            
        </div>
    </motion.section>
    </>
  )
}

export default Myprofile