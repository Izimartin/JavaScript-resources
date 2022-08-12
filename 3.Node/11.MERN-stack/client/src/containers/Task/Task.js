import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './task.css'
import Welcome from '../../components/Task/Welcome'
import AddList from '../../components/Task/AddList'
import Lists from '../../components/Task/Lists'

function Task({hasToken}) {
  const history = useHistory()

  const [lists, setList] = useState({})
  const [init, setInit] = useState(false)

  useEffect(() => {
    if(!hasToken) history.push('/')

    if(!init) {
      getTask()
      setInit(true)
    }
  })
  
  const getTask = () => {
    axios.get('/task')
    .then(res => {
      if(res.status === 200 && res.data.length > 0) setList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <div className='task'>
      <Welcome />

      <div className="taskConstainer">
        <AddList setList={(val) => setList(val)}/>


        <div className="content-center tasklist">
          <Lists 
            lists={lists}
            getTask={getTask}
            />
        </div>
      </div>
    </div>
  )
}

export default Task
