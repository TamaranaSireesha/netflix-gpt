//rafce react arrow function 
import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import {checkValidateData} from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Login = () => {

  const [isSignInform,setSignInForm]=useState(true);
  const [ErrorMessage,setErrorMessage]=useState(null);

  const navigate=useNavigate();

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  const HandleValidation=()=>{
    checkValidateData(email,password);
    console.log(email);
   // console.log(password);
    console.log(email.current.value);

    console.log(password.current.value);

  const message=  checkValidateData(email.current.value,password.current.value);
  //console.log(message);
  setErrorMessage(message);
  if(message) return;
  

  
  if(!isSignInform){
    //signup user
   createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: user.current.value, photoURL: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/08/netflix-icon.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
    }).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(error.message);
    });
    
  
  
    console.log(user);
    navigate("/");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });

  }
  else{
    //signin user 
 signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
    navigate("/Browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
} 


  }
  
  const toggleclick=()=>{
    setSignInForm(!isSignInform);
  }
 
  
  return (
    <div>
      <Header/>
      <div className ="absolute">
      <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"  alt='background'/>
    </div>
    <form  onSubmit={(e) => e.preventDefault()} className="bg-black p-8 absolute  w-3/12  mx-auto my-28 right-0 left-0 bg-opacity-80 rounded-md text-white" onClick={HandleValidation}>
     {/* e.prevent default is used  not to refresh the  "form" after clicking the submition to prevent that one used the onsubmit handler it is always shown for not react library all webbased apps */}


     <h1 className='font-bold text-2xl text-white  m-2 '>{isSignInform ?"Sign In":"Sign Up"}</h1> 
      {!isSignInform &&<input type="text" placeholder='Full Name' className="p-3 my-3 w-full  bg-gray-700" ref={name}/>}

     <input type="text" placeholder='Email or phone number'  className="p-3 my-3 w-full bg-gray-700 " ref={email}/>
     <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700"
        />
     <p className='text-red-600'>{ErrorMessage}</p>
     <button className="text-white p-3 my-4 bg-red-700 w-full rounded-md">{ isSignInform ?"Sign In":"Sign Up"}</button>
     
     <p className='text-white cursor-pointer py-2' onClick={toggleclick}>{isSignInform?"New to Netflix? Sign up now.":"Already Registed? Sign In."}</p>
    </form>
    </div>
  )
} 

export default Login;

