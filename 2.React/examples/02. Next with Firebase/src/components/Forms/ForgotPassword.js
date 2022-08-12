import React, {useRef, useState} from 'react'
import {useAuth} from '../../context/AuthContext'

const ForgotPassword = ({setPage}) => {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [errorMsg, setErrorMsg] = useState('')

  const sendEmailConf = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    resetPassword(email)
    setErrorMsg('An link has been sent to you email.')
  }

  const onChange = () => {
    setErrorMsg('')
  }

  return (
    <div className="content-center form-wrapper">
      <form className='content-center confirm-email'
        onSubmit={sendEmailConf}>
        <h1>Forgor Password?</h1>
        <div className='mes-alert'>
          <span>{errorMsg}</span>
        </div>
        <input type="text" 
          placeholder='Enter email' 
          required
          onChange={onChange}
          ref={emailRef}/>
        <button>Submit</button>
        </form>
      <div className='content-center already-btn'>
        Not yet registered? 
        <button 
          onClick={()=>setPage('register')}>Signin instead</button>
      </div>
    </div>
  )
}


export default ForgotPassword