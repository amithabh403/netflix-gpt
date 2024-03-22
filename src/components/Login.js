import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div >    
      <Header />  
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='logo' />
      </div>
      <form className='w-3/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? 'Sign In' : 'Sign up form'}</h1>
        { !isSignInForm && <input type="text" placeholder='Full Name' className='p-2 my-3 bg-gray-800' />}
        { !isSignInForm && <input type="number" placeholder='phone number' className='p-2 my-3 bg-gray-800' />}
          <input type="text" placeholder='Email Address' className='p-2 my-3 bg-gray-800' />
          <input type="password" placeholder='Please enter password here' className='p-2 my-3 bg-gray-800' />
          <button className='p-2 my-3 bg-red-700 w-full'>{isSignInForm ? 'Sign In' :
          'Sing Up'}</button>
          <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm? 'New to Netflix? Sing up here' : 'Already Registered! Sign In Now'} </p>
      </form>    
    </div>
  )
}

export default Login;