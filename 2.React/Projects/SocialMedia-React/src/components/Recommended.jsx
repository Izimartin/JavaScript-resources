import React, { useState, useRef } from 'react'
import Recommend from './Recommend'
import "./recommended.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import {Link} from "react-router-dom"
import Tilt from 'react-tilt'

const Recommended = () => {

const [recommend, setRecommend ] = useState(Recommend)


  return (
    <section className='recon'>
         <div className="swiper-container">
                  <div className="recon__header">
                      <p>People you may know</p>
                  </div>
                 <Splide className="mySwiper"
                 options={ {
                  arrows: false,
                  drag: "free",
                  gap: "1rem",
                  perMove: 1,
                  fixedWidth: "13rem", 
                  pagination: false
                }}
                 >
                 {
                     recommend.map((item) => {
                         const {id, profileimg, background, mutualFriends, profilename} = item
                         return(
                             <SplideSlide className='' key={id}>
                               <Tilt 
                                 options={{
                                   scale: 1
                                 }}
                               >
                                <div className="recon__perbody">
                                <div className="recon__overlay"></div>
                                     <img src={background} alt="" className='recon__bckg'/>
                                    <img src={profileimg} alt="" className='profile-picture2 abs' />
                                    <p className='recon__storyname'>{profilename}</p>
                                    <p className='recon__mutualFriends'>{mutualFriends} Mutual Friends</p>
                                    <Link to={`/singleprofile/${id}`}> <button className='recon__btn btn btn-primary'
    
                                     >View Profile</button></Link>
                                </div>
                                </Tilt>
                             </SplideSlide>
                         )
                     })
                 }
               </Splide>
                  
         </div>

    </section>
  )
}

export default Recommended