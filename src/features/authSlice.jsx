/*


import { createSlice } from "@reduxjs/toolkit"



const authSlice = createSlice({
name:"authSlice",

initialState : {
  email: "",
  password : ""
},

reducers: {

  loginAccount:(state, {payload})=> {
    state.email= payload.email;
    state.password= payload.password;
  },
  logoutAccount:(state, {payload})=> {

     state.email = "";
  state.password = "";
  },
}



}) ;
export const {loginAccount,logoutAccount}=authSlice.actions
export default authSlice.reducer.  

*/