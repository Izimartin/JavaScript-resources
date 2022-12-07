import React from 'react'
import "./onlinefriends.css"
import onlinedata from "./Onlinedata"
import { BiSend} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Onlinefriends = () => {
  return (
    <section className='online-friends'>
        <div className="online-container">
        
           <h1 className='headdy'>Online friends</h1>
            
            {
                onlinedata.map((friend) => {
                    const { profileimg, friendname,  online,  title, id   } = friend
                    return(
                        <div className='"Who-to-follow-list online-ol' key={id}>
                          <div className="wtfl-top online-top">
                          <div className="online-profile-image">
                              <img src={profileimg} alt="" className='profile-picture2'/>
                              {online ? <div className='dot-green'></div> : <div className='dot-orange'></div>}
                          </div>
                                  <div className="wtfl-middle">
                                    <p className="friendname">{friendname}</p>
                                    <p className="text-muted">{title}</p>
                                  </div>
                               </div>
                               <div className="message-buttons">
                               <Link to={`/chatpage/${id}`}>
                              <BiSend className='online-btn btn'/>
                      </Link>
                               </div>

                        </div>
                    )
                })
            }
            



        </div>
    </section>
  )
}

export default Onlinefriends