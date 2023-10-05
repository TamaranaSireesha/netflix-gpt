 export const  checkValidateData=(email,password)=>{
   const emailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email) ;
   const passwordvalid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/.test(password);
   if(!emailvalid) return "Email Id is not valid";
   if(!passwordvalid) return "Password Id is not valid";
   return null ; 
}