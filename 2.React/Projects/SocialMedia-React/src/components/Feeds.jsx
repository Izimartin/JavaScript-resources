import './feeds.css'
import profile1 from "../assets/profile1.jpg"
import Coverimg from "../assets/coverimg.jpg"
import Stories from './Stories'
import { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BsFilterLeft} from 'react-icons/bs';
import Poststory from './Poststory'
import Post from './Post'
import Recommended from './Recommended'
import SinglePost from './SinglePost'
import { Link } from 'react-router-dom'



const Feeds = ({showProfile, setShowProfile}) => {
             const [stories, setStories] = useState(Stories) 

  return (
    <section className='feeds' >
         <div className="feeds__container" >
              
            <div className="profile__toggler">
            <button className="btn btn-primary burger profile__toggle" 
                                onClick={()=> setShowProfile(true)}
                                ><BsFilterLeft className="cre "  /></button>
              <p>My profile</p>
            </div>

              <Splide className="addtostory"
               options={ {
                arrows: false,
                drag: "free",
                gap: "1rem",
                perMove: 1,
                fixedWidth: "7.5rem", 
                pagination: false
              }}
              onClick={()=> setShowProfile(false)}
              >
                <SplideSlide className='addtostories'>
                <p  className='bckg hehe'></p>
                  <img src={profile1} alt=""  className='profile-picture story__profilee'/>
                  <p className='storyname'>Add Story</p>
                </SplideSlide>
                  
                   
                   {
                     stories.map((story)=> {
                       const {profileimg, background, storyname , id} = story
                       return(
                         
                         <SplideSlide className="stories" key={id}>
                           <img src={background} alt="" className='bckg' />
                           <img src={profileimg} alt="" className='profile-picture story__profile'/>
                           <p className='storyname'>{storyname}</p>
                         </SplideSlide>
                       )
                     })
                   }
                     

              </Splide>

              <Poststory />
              <Post />
              <Recommended />
              <SinglePost />




         </div>
    </section>
  )
}

export default Feeds