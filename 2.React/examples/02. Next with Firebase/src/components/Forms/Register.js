import React, {useState, useRef} from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../../context/AuthContext'

const Register = ({setPage}) => {
  const router = useRouter()
  const {registerUser} = useAuth()
  const [error, setError] = useState('')
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordCnfRef = useRef()

  const register = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const passwordCnf = passwordCnfRef.current.value

    if (password !== passwordCnf) {
      // alert message when password are not the same
      setError('Please confirm your password.')
      return 
    }

    const register = await registerUser(email, password)
    if(register.message) {
      // alert message when login error occurs
      setError(register.message)
      return 
    }

    // redirect page  after successful login
    router.replace('/dashboard')
  }

  const inputChange = () => {
    setError('')
  }

  return (
    <div className="content-center form-wrapper">
      <form
         className='content-center register'
         onSubmit={register}>
        <h1>Register</h1>
        <div className='mes-alert'>
          <span>{error}</span>
        </div>
        <input type="text" 
          placeholder='Enter email' 
          required
          ref={emailRef}
          onChange={inputChange}/>
        <input type="password" 
          placeholder='Enter password' 
          required
          ref={passwordRef}
          onChange={inputChange}/>
        <input type="password" 
          placeholder='Confirm Password' 
          required
          ref={passwordCnfRef}
          onChange={inputChange}/>
        <button>Submit</button>
      </form>
      <div className='content-center already-btn'>
        Already registered? 
        <button
          onClick={()=>setPage('login')}>Login instead</button>
      </div>
    </div> 
  )
}

export default Register
