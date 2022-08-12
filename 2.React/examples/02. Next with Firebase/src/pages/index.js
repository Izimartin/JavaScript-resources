import React, {useState} from 'react'
import {useRouter} from 'next/router'

import Register from '../components/Forms/Register'
import Login from '../components/Forms/Login'
import ForgotPassword from '../components/Forms/ForgotPassword'

import {useAuth} from '../context/AuthContext'

const Home = () => {
  const [page, setPage] = useState('login')
  const router = useRouter()
  const {user} = useAuth()

  // redirect page if user is logged in
  // user ? router.replace('/dashboard') : null

  return (
    <div className='content-center main'>
      { page === 'forgot password' ? 
          <ForgotPassword setPage={(val)=> setPage(val)}/> : 
        page === 'register' ? 
          <Register setPage={(val)=> setPage(val)}/> : 
            <Login setPage={(val)=> setPage(val)}/> }
    </div>
  )
}

export default Home
