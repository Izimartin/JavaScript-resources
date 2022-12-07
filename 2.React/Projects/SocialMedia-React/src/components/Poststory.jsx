import "./poststory.css"
import profile1 from "../assets/profile1.jpg"
import { FcStackOfPhotos, FcVideoCall} from 'react-icons/fc';
import {BsFillCalendarEventFill} from 'react-icons/bs';
import {FaCookieBite} from 'react-icons/fa';
import {SiSparkpost} from 'react-icons/si';


const Poststory = () => {
  return (
    <section className="poststory">
        <div className="poststory__container">
             <div className="post__top">
                 <img src={profile1} alt="" className="profile-picture"/>
                 <input type="text" 
                   placeholder="Share your thoughts..."
                   id="createPost"
                 />
             </div>
             <div className="post__bottom">
                    <p><FcStackOfPhotos className="post__icon"/> Photo</p>
                    <p><FcVideoCall className="post__icon"/> Video</p>
                    <p><BsFillCalendarEventFill className="post__icon"/> Event</p>
                    <p><FaCookieBite className="post__icon"/> Feeling / Activity</p>
                    <button className="btn btn-primary post__btn"> <SiSparkpost className="ii"/> Post</button>
             </div>
        </div>
    </section>
  )
}

export default Poststory