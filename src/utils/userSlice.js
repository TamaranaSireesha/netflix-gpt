import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{    //call back function
            return action.payload;     
        },
        removeUser:(state,action)=>{
            return  null;
        }
    },
});

export const {addUser,removeUser}=userSlice.action;
export default userSlice.reducer;