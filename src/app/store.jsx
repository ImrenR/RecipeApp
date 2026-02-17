
import {configureStore} from "@reduxjs/toolkit"
import recipeSlice from "../features/recipeSlice"
//import authSlice from "../features/authSlice"



export const store = configureStore({
reducer: {
  recipeSlice : recipeSlice,
// authSlice : authSlice,

}
})