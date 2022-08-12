import React from 'react'
import axios from 'axios'

function Lists({lists, getTask}) {

  const showLists = () => {
    if(lists.length > 0) {
      return lists.map( (list, i)=> {
        return (
          <li className='content-center' key={i}>
          <span>{list.description}</span>
          <i onClick={()=>deleteList(list._id)}>x</i>
        </li>)
      })
    }
  }

  const deleteList = (_id) => {
    axios.delete(`/task/${_id}`)
      .then(res => {
        if(res.status === 202) getTask()
      })
      .catch(err => {
        console.log({error: err})
      }
    )
  }

  return (
    <ul className='content-center'>
      {showLists()}
      {/* <li className='content-center'>
        <input type="text" placeholder='Buy Milk'/>
        <i>x</i>
      </li>
      <li className='content-center'>
        <span>Buy Milk</span>
        <i>x</i>
      </li> */}
    </ul>
  )
}

export default Lists
