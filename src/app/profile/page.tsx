"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile(){

    const router = useRouter()

    const logout = async () =>{

        console.log("hello")
        try {

            await axios.get('/api/users/logout');
      
    
            router.push('/login')

            
        } catch (error:any) {
            console.log(error.message);
            
        }
    }

    return(
        <>
             <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Profile page</h1>
                
                <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >LogOut</button>
             </div>
        </>
    )
}