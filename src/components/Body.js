import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import {onAuthStateChanged } from "firebase/auth";
import { auth} from '../utils/Validate';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
const dispatch=useDispatch();
const appRouter=  createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
       path:"/browse",
       element:<Browse/>
    }

    ]);
    useEffect=(()=>{
      
     onAuthStateChanged(auth, (user) => {
     
     if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    //this is used update the details of a user
        const {uid,email,displayname}=user;
        dispatch(addUser({uid: uid,email: email,displayname: displayname}));
    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
  }
  });
},[]);
    
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
