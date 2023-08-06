"use client"

import axios from "axios";
import React,{useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Profile(){

    const router = useRouter()
    const [data,setData] = useState("nothing");
    const logout = async () =>{

        console.log("hello")
        try {

            await axios.get('/api/users/logout');
      
    
            router.push('/login')

            
        } catch (error:any) {
            console.log(error.message);
            
        }
    }

    const getUserDetails = async () =>{
        const response = await axios.get('/api/users/me')
        console.log(response.data);
        setData(response.data.data.username);
    }

    return(
        <>
             <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Profile page</h1>
                <h2>{data === 'nothing' ? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
                <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >LogOut</button>
                 <button
                onClick={getUserDetails}
                className="bg-blue-700 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >getUser Data</button>

             </div>
        </>
    )
}