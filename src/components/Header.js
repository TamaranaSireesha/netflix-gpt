import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Header = () => {
 const navigate=useNavigate();
 
 const HandleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  
  return (

    
    <div className="absolute w-screen px-10 py-2 z-10 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>  
       <div className="flex p-2">
      <img  className="w-12 h-12" src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt="usericon"></img>
      <button className="text-white font-bold" onClick={HandleSignOut}>(SignOut)</button> 
     </div>
     </div>
    
  
  );
}
export default Header
