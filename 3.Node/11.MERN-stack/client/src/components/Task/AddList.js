import React, {useState} from 'react'
import axios from 'axios'

function AddList({setList}) {
  const [input, setInput] = useState('')

  const addList = (e) => {
    e.preventDefault()
    const description = document.querySelector("input[name='task']").value
    axios.post('/task/create', {
      description
    })
    .then(res => {
      if(res.status === 201) setList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    setInput('')
  }


  return (
    <div className="content-center taskInput">
      <form onSubmit={(e) => addList(e)}>
        <input 
          type="text" 
          name='task' 
          placeholder='Enter a task' 
          value={input} 
          onChange={(e) => setInput(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddList
