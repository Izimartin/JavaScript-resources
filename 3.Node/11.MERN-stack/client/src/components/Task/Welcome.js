import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Welcome() {
  const history = useHistory()
  
  const logout = () => {
    axios.defaults.headers.common['Authorization'] = ``
    history.push('/')
  }

  return (
    <div className="content-center headertask">
      <h1>Welcome to my task</h1>
      <button onClick={logout} className='logout'>Logout</button>
    </div>
  )
}

export default Welcome
