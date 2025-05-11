import {configureStore} from "@reduxjs/toolkit"
import conf from "../conf/conf"
import authSlice from "./authSlice"

const store = configureStore({
  reducer:{
    auth:authSlice
  }
})

export default store