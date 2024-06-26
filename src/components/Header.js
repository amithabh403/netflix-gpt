import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  console.log('user', user);

  const handleUserSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
     // dispath();
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='w-screen absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='Header' />
        {
          user &&
          <div className='flex'>
            <img className='w-8 h-8' src={user?.photoURL}
              alt='user-icon' />
            <button className='h-8 p-2 text-white' onClick={handleUserSignOut}>Sign Out</button>
          </div>
        }
      
        
    </div>
  )
}

export default Header;