import React from 'react'
import {useRouter} from 'next/router'
import {useAuth} from '../context/AuthContext'

const Dashboard = () => {
  const {logoutUser} = useAuth()
  const router = useRouter()

  const logout = async () => {
    await logoutUser()
    router.replace('/')
  }

  return (
    <div className='content-center main'>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard