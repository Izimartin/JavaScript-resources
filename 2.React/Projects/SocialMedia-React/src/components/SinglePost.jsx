import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import { BsThreeDots} from 'react-icons/bs';
import { AiFillLike} from 'react-icons/ai';
import { FcLike} from 'react-icons/fc';
import { FaCommentDots} from 'react-icons/fa';
import { MdDeleteForever} from 'react-icons/md';
import { BiSend} from 'react-icons/bi';
import { motion } from "framer-motion";
import profilepicture from "../assets/profile1.jpg"
import "./post.css"


const SinglePost = () => {

    const [posts, setposts ] = useState(Posts)
    
    const [isLiked, setIsLiked] = useState(false)
    const [showComment, setShowComment] = useState(false)
    const [showModal, setShowModal] = useState(false)

   const handlerlike = () => {
       setIsLiked(prevState => !prevState)
   }

    const showModalHandler = (index) => {
        setShowModal(prevState => !prevState)
    }
    const handleDeletePost = (id) => {
        const newPost = posts.filter(post => id !== post.id)
        setposts(newPost)
    }

// comment section
const [comment, setComment] = useState("")
const [commentList, setCommentList] = useState([])

const handleSubmit = (e) => {
    e.preventDefault()
   if(comment){
    setCommentList([...commentList, 
        {
            id: commentList.length,
            comm: comment
        }
    ])
    console.log(commentList)
    setComment('')
   }
}

const handleCommentDelete = (id) =>{
const newCommentList = commentList.filter(comm => comm.id !== id)
setCommentList(newCommentList)
}


    
  return (
    <section className='posts'>
        
        <div className="posts__container">
              {
                  posts.map((post, index)=> {
                      const { category, id,   profileimg, postimg,
                        storyname, like, comments,
                        postNote , time} = post
                        if (category !== "first") {
                            return(
                                <div className='post__container' key={id} data-aos="flip-right">
                                      <div className="post__top">
                                          <div className="post__left">
                                          <img src={profileimg} alt="" className='profile-picture2 post__prof'/>
                                          <div className="post__info">
                                              <p>{storyname}</p>
                                              <p className='text-muted post__time'>{time}</p>
                                          </div>
                                                   </div>
                                          <BsThreeDots className='post__icon modal__icon'
                                 onClick={()=>showModalHandler(index)}
                                          />
                                        {
                                            showModal ? (<motion.div className='modal'
                                            onClick={showModalHandler}
                                            initial={{opacity : 0}}
                                            animate={{opacity : 1,
                                            transition: "ease-in"
                                            }    }
                                            >
        <button className='btn btn-primary' onClick={()=> handleDeletePost(id)}>Delete post</button>
                                            </motion.div>) : null
                                        }

                                          
                                          </div>
                                          <div className="post__middle">
                                              <p>{postNote}</p>
                                              <img src={postimg} alt="" className='postimg'/>
                                          </div>
                                          <div className="post__semibottom">
                                          <div className="like__info">
                                          <AiFillLike className='post__icon'
                                          onClick={handlerlike}
                                          />
                                          <FcLike className='post__icon'
                                           onClick={handlerlike}
                                          />
                                          {isLiked ? <p>{like + 1}</p> : <p>{like}</p>}
                                          </div>
                                          <div className='text-muted ioo wee'>
                                       <p className='i0'>{commentList.length} </p>
                                       {commentList.length > 1 ? <p>comments</p> : <p>comment</p>}</div>
                                       </div>
                                       <div className="post__bottomm" >
                                       <div className='ioo'>

                                     <buttton className="post__btnn btn"  onClick={handlerlike}><FcLike className='post__icon '
                                     /> Like</buttton>


                                    <buttton className="post__btnn btn"
                                    
                                    ><FaCommentDots className='post__icon'
                                    /> Comment</buttton>

                                     </div>
              {
                  !showComment && (        
                      <>
                  <form action="" className='post__form'>
                  <input type="text"
                   placeholder='write your comment'
                   value={comment}
                   onChange={(e)=> setComment(e.target.value)}
                  />
                  <button type='submit'
                   onClick={handleSubmit}
                   className="btn btn-primary"
                  ><BiSend /></button>
             </form>
               
               <ul className='commentlit'>
               {
                commentList.map((item) => {
                       return(
             <div className="commentlist" key={item.id}>
                 <div className="commentlist-flex">
                                        <img src={profilepicture} alt="" className='profile-picture2'/>
                                        <li className='eachComm'>{item.comm}</li>
                                        </div>
                 <MdDeleteForever className='comment-delete'
                 onClick={()=>handleCommentDelete(item.id)}
                 />
             </div>
                       )
                   })
               }
               </ul>
               </>
               )
              }
                                  

                                       </div>
                                </div>
                            )
                        }
                  })
              }
        </div>

       
                                       
                                    
                                    

    </section>
  )
}

export default SinglePost