import React, {useState, useEffect}  from 'react'
import {useRouter} from 'next/router'

import {useAuth} from '../context/AuthContext'

import UserProfile from '../components/Profiles/profile'

function Profile() {
  const router = useRouter()
  const [userProfile, setUserProfile] = useState({isSet: false})
  const {saveUserImage, user, getUserInfo, updateUserProfile, logoutUser} = useAuth()

  const updateForm = async (obj) => {
    const {firstname, lastname, email, gender, image} = obj
    let avatar = ''
    if(image.length === 1){
      avatar = await saveUserImage(image[0])
    } else {
      avatar = userProfile.avatar
    }

    if(email !== userProfile.email) {
      await user.updateEmail(email)
    }

    await updateUserProfile({firstname, lastname, email, gender, avatar})
    setUserProfile({
      ...userProfile,
      firstname,
      lastname, 
      email,
      gender,
      avatar
    })
  }

  const logout = async () => {
    await logoutUser()
    router.replace('/')
  }

  useEffect(() => {
    if(user) {
      (async function(){
        const user = await getUserInfo()
        !userProfile.isSet ? setUserProfile({
          isSet: true,
          ...user  
        }) : null
      })()
    }
  })

  return (
    <> { userProfile.isSet ? 
        <UserProfile 
          user={userProfile}
          onLogout={logout}
          onUpdate={(obj)=> updateForm(obj)} /> : null }
    </>
  )
}

export default Profile
