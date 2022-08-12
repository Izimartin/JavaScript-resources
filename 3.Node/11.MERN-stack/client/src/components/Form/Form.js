import React from 'react'
import './Form.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Form({withName, text, setAuthToken}) {
  const history = useHistory()


  const register = () => {
    const name = document.querySelector("input[name='name']").value
    const email = document.querySelector("input[name='email']").value
    const password = document.querySelector("input[name='password']").value

    axios.post('/users/register', {
      name, email, password
    })
    .then(res => {
      history.push('/login')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const login = () => {
    const email = document.querySelector("input[name='email']").value
    const password = document.querySelector("input[name='password']").value

    axios.post('/users/login', {
      email, password
    })
    .then(res => {
      if(res.data.token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
        setAuthToken(true)
        history.push('/task')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='form'>
      <form onSubmit={(e) => {
        e.preventDefault()
        text === 'Login' ? login() : register()
      }}>

        { withName ? 
          <>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='Enter Name'/>
          </> : null }

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter email"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Enter password"/>
        <input type="submit" value={text} />
      </form> 
    </div>
  )
}

export default Form
