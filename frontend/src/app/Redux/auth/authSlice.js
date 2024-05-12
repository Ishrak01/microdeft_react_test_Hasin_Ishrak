import { createSlice } from "@reduxjs/toolkit";

const initialState={
 token: undefined,
  user: undefined,
}


const authSlice=createSlice({
  name:"auth",
  initialState,
  reducers:{


  }
})


export const {userLoggedIn,userLoggedOut}= authSlice.actions
export default authSlice