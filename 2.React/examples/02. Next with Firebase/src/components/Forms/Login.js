import React, {useState, useRef} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../../context/AuthContext'

const Login = ({setPage}) => {
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  const {loginUser} = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()

  const login = async (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const login = await loginUser(email, password)
    if(login.message) {
      // alert message when login error occurs
      setErrorMsg(login.message)
      return 
    }

    // redirect page  after successful login
    router.replace('/dashboard')
  }

  const inputChange = () => {
    setErrorMsg('')
  }

  return (
    <div className="content-center form-wrapper">
      <form className='content-center login'
        onSubmit={login}>
        <h1>Login</h1>
        <div className='mes-alert'>
          <span>{errorMsg}</span>
        </div>
        <input type="text" 
          placeholder='Enter email' 
          ref={emailRef}
          required
          onChange={inputChange}/>
        <input type="password" 
          placeholder='Enter password' 
          ref={passwordRef}
          required
          onChange={inputChange}/>
        <button>Submit</button>
      </form>
      <div className='content-center forgot-btn'>
        <button onClick={()=>setPage('forgot password')}>Forgot Password?</button>
      </div>
      <div className='content-center already-btn'>
        Not yet registered? 
        <button
          onClick={()=>setPage('register')}>Signup instead</button>
      </div>
    </div>
  )
}

export default Login
