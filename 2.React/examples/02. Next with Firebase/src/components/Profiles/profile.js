import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import image from '../../../public/images/user.png'

const Profile = ({user, onUpdate, onLogout}) => {

  const [gender, setGender] = useState('')
  const [input, setInput] = useState({
    isSet: false,
    fName: '',
    lName: '',
    email: ''
  })
  const imageRef = useRef()

  const changeGender = (val) => {
    setGender(val)
  }

  useEffect(() => {
    setGender(user.gender)
    if(!input.isSet) {
      setInput({
        isSet: true,
        fName: user.firstname,
        lName: user.lastname,
        email: user.email
      })
    }
  }, [input, user.email, user.firstname, user.gender, user.lastname])

  const submitForm = (e) => {
    e.preventDefault()
    onUpdate({
      image : imageRef.current.files,
      firstname : input.fName,
      lastname : input.lName,
      email : input.email,
      gender
    })
  }

  const onChange = (e, val) => {

    setInput({
      ...input,
      [val]: e.target.value
    })
  }

  return (
    <div className='main'>
      <header className='content-center header'>
        <ul className='content-center nav-list'>
          <li>
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </header>
      
      <div className="content-center profile">
        <h1>My Profile</h1>

        <div className="profile-details">
          <form
            onSubmit={submitForm}
            className='content-center profile-form'>
            <div className="content-center profile-image">
              <Image 
                src={user.avatar ? user.avatar : image} 
                alt="user-profile-pic" 
                height={500}
                width={500}/>
              <input 
                type="file" 
                placeholder='upload image'
                ref={imageRef}
                />
            </div>
            <div className="content-center profile-gender">
              <span>Select Gender</span>
              <div className="content-center button-wrapper">
                <div>
                  <input type="radio" 
                    id='male' 
                    value='Male'
                    name='gender' 
                    checked={gender === 'male' ? true : false}
                    onChange={()=>changeGender('male')}/>
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input type="radio" 
                    id='female' 
                    value='Female' 
                    name='gender' 
                    checked={gender === 'female' ? true : false}
                    onChange={()=>changeGender('female')}/>
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="content-center profile-value">
              <input type="text" 
                placeholder='Enter firstname' 
                value={input.fName}
                onChange={(e) => onChange(e, 'fName')}/>
              <input type="text" 
                placeholder='Enter lastname' 
                value={input.lName}
                onChange={(e) => onChange(e, 'lName')}/>
              <input type="email" 
                placeholder='Enter email' 
                required 
                value={input.email}
                onChange={(e) => onChange(e, 'email')}/>
            </div>

            <button>Update</button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default Profile
