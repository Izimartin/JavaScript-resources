import React from 'react';
import Headers from '../../components/Headers/Headers'
import Form from '../../components/Form/Form'

export default function Login({setAuthToken}) {
  return (

    <div className='home'>
      <Headers /> 
      <Form 
        withName={false}
        text={'Login'}
        setAuthToken={setAuthToken}
        />
    </div>
  );
}