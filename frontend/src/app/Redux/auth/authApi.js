import { apiSlice } from "../baseApi/apiSlice"

export const authApi= apiSlice.injectEndpoints({


  endpoints: (builder)=> ({
    register: builder.mutation({
      query:(data)=> ({
        url: "/register",
        method: "POST",
        body: data
      }),

      
    }),
    blog: builder.mutation({
      query:(data)=> ({
        url: "/blog",
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


export const{useRegisterMutation,useLoginMutation,useBlogMutation}=authApi