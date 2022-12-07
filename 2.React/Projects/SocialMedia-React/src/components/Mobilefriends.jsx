import React, {useState} from 'react'
import FriendRequests from "./NewFriends"
import { AiOutlinePlus} from 'react-icons/ai';
import { FiUserCheck} from 'react-icons/fi';
import { FaUserFriends} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Loadvariants = {
  hidden: { opacity: 0,
  },
  visible: { opacity: 1,
     transition: {
          type: "spring",
          duration: 2
     },
     exit: {
        x: "-100vw",
       transition:{ ease: 'easeInOut'}
      }
  }
}

const Mobilefriends = () => {

  const [friendRequests, setFriendRequests] = useState(FriendRequests)

  const [isAccepted, setIsAccepted] = useState(friendRequests.accepted)
  const [isAccept, setIsAccept] = useState(false)


 
  return (
    <motion.section className='mobile__friends'
    initial="hidden"
    animate="visible"
    exit={{
     x: "-100vw",
    transition:{ ease: 'easeInOut'}
   }}
    variants={Loadvariants}
    >
      <div className="friends__container mobile-friends-container">
           <div className="who-to-follow">
             <p className="headdy">Who to follow</p>
             {
               friendRequests.map((friend) =>{
                 const { profileimg, friendname,  accepted,  title, id   } = friend
                  
                 return(
                          <div className="Who-to-follow-list" key={id}>
                               <div className="wtfl-top">
                                  <img src={profileimg} alt="" className="profile-picture2 iii"/>
                                  <div className="wtfl-middle">
                                    <p className="friendname">{friendname}</p>
                                    <p className="text-muted">{title}</p>
                                  </div>
                               </div>
                               <div className="wtfl-bottom">
                                 { isAccepted ? <FiUserCheck className="wtfl-btn wtfl-true" 
                                 /> :  <AiOutlinePlus className="wtfl-btn"    
                                 />}     
                               </div>
                          </div>
                 )
               })
             }
             <button className="btn btn-primary">View more</button>
           </div>
      </div>
      </motion.section>
  )
}

export default Mobilefriends