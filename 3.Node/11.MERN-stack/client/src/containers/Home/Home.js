import React, {useEffect} from 'react';
import Headers from '../../components/Headers/Headers'
import Form from '../../components/Form/Form'

import axios from 'axios'

export default function Home() {

  useEffect(() => {
    axios.post('https://aiman-test-mern.herokuapp.com/users/create', {
      name: 'aimanski',
      email: 'samp@mail.com',
      password: '1234qwer'
    })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
  })

  return (
    <div className='home'>
      <Headers /> 
      <Form 
        withName={true}
        text={'Register'}/>
    </div>
  );
}
