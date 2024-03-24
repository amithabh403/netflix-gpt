import React, { useState, useRef } from 'react'
import Header from './Header';
import { validateEmailAndPassword } from '../utils/ValidateUtil';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [displayName, setDisplayName] = useState(null);
  const [phoneNo, setphoneNo] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleSignInOrSignUp = () => {
    const validationMessage = validateEmailAndPassword(email.current.value, password.current.value);
    setErrorMessage(validationMessage);
    if (validationMessage) return;
    //Sign in/ Sing Up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://www.flaticon.com/free-icon/young-man_15375359"
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            console.log('name url', displayName, photoURL);
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL }));
            navigate('/browse');
          }).catch((error) => {
            // An error occurred
          });
          //navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  }
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='logo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-16 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg 
      bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign up form'}</h1>
        {!isSignInForm &&
          <input type="text" placeholder='Full Name' className='p-2 my-3 bg-gray-800' ref={name} />}
        {!isSignInForm &&
          <input type="number" placeholder='phone number' className='p-2 my-3 bg-gray-800' value={phoneNo} />}
        <input type="text" placeholder='Email Address' ref={email}
          className='p-2 my-3 bg-gray-800' />
        <input type="password" placeholder='Please enter password here' ref={password}
          className='p-2 my-3 bg-gray-800' />
        <p className='text-red-700 font-xl'>{errorMessage}</p>
        <button className='p-2 my-3 bg-red-700 w-full' onClick={handleSignInOrSignUp}>{isSignInForm ? 'Sign In' :
          'Sing Up'}</button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sing up here' : 'Already Registered! Sign In Now'} </p>
      </form>
    </div>
  )
}

export default Login;