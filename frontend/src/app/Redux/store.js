import { configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "./baseApi/apiSlice"



import authSliceReducer from "./auth/authSlice"

const store= configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

   

   
    
    auth:authSliceReducer,
  

   
   
  },

  devTools: !process.env.NODE_ENV ==="production",

  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
