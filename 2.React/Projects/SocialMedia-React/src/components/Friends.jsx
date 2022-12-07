import { useState } from "react"
import "./friends.css"
import FriendRequests from "./NewFriends"
import { AiOutlinePlus} from 'react-icons/ai';
import { FiUserCheck} from 'react-icons/fi';
import { FaUserFriends} from 'react-icons/fa';
import { RiEmotionLine} from 'react-icons/ri';
import Mobilefriends from "./Mobilefriends";
import Onlinefriends from "./Onlinefriends";
import Mobileonlinefriends from "./Mobileonlinefriends";


const Friends = () => {

  const [friendRequests, setFriendRequests] = useState(FriendRequests)

  const [isAccepted, setIsAccepted] = useState(friendRequests.accepted)

  //show mobile friendList
  const [showMobileView, setShowMobileView] = useState(false)

  const [showMobileOnlineFriends, setShowMobileOnlineFriends] = useState(false)

  return (
    <>
    <section className="friends">
      <div className="friends__container ">
           <div className="who-to-follow">
             <h1 className="headdy">Who to follow</h1>
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
                                 { accepted ? <FiUserCheck className="wtfl-btn wtfl-true" onClick={() => setIsAccepted(true)}/> :  <AiOutlinePlus className="wtfl-btn" onClick={() => setIsAccepted(true)}/>}     
                               </div>
                          </div>
                 )
               })
             }
             <button className="btn btn-primary">View more</button>
           </div>
           
      </div>
      <Onlinefriends />
     
    </section>
    <FaUserFriends className="showmobilefriends" 
                onClick={() => setShowMobileView(!showMobileView)}
              />
              {
                showMobileView && <Mobilefriends />
              }
              <RiEmotionLine className="showmobilefriends chat-online" 
                onClick={() => setShowMobileOnlineFriends(!showMobileOnlineFriends)}
              />
              {
                showMobileOnlineFriends && <Mobileonlinefriends />
              }

         
    </>
  )
}

export default Friends