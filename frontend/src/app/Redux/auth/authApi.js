import { apiSlice } from "../baseApi/apiSlice"

export const authApi= apiSlice.injectEndpoints({

  tagTypes:['update'],
  endpoints: (builder)=> ({
    register: builder.mutation({
      query:(data)=> ({
        url: "/register",
        method: "POST",
        body: data
      }),

      
    }),


   login: builder.mutation({
      query:(data)=> ({
        url: "/login",
        method: "POST",
        body: data
      }),

     
  

      

      
    }),
    
    
  })
})


export const{useRegisterMutation,useLoginMutation}=authApi