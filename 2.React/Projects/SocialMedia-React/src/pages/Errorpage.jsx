import React from 'react'
import './errorpage.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown, AiOutlineArrowLeft} from 'react-icons/ai';


const Errorpage = () => {
  return (
    <section  className='errorpage'>
      <div className="error-container">
           <p>Oops wrong page</p>
            <p>Click here to go back</p>
           <AiOutlineArrowDown />
            <Link to="/"><button className='btn btn-primary err-btn'> <AiOutlineArrowLeft className='err-icon'/> Go back</button></Link>
      </div>
    </section>
  )
}

export default Errorpage