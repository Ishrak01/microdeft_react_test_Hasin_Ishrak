"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useBlogMutation } from "./Redux/auth/authApi";

const page = () => {
  const router=useRouter()
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const [blog, { data, isLoading }] =useBlogMutation();
  

  

  const handleSubmit = (e) => {
    e.preventDefault();

    blog({
      title,
      status,
      description
    });
  };


  useEffect(() => {
    if (data) {
       alert("blog created successfully")
        
        router.push("/");
      } else if (data?.error) {
   
        toast.error(data.error);
    } else if (data?.message) {
       
        toast.error(data.message);
    }
}, [data, router]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        id="title"
        name="title"
        type="title"
        autoComplete="title"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>

        <input
        id="status"
        name="status"
        type="status"
        autoComplete="status"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}/>


        <input
        id="description"
        name="description"
        type="description"
        autoComplete="description"
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>
        
        <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
            >
              Submit
            </button>
          </div>
      </form>
    </div>
  )
}

export default page