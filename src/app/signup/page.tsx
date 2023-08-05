"use client"
import Link from "next/link"
import React,{useEffect} from "react"
import { useRouter } from "next/navigation"
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup(){

    const router = useRouter();

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setLoading] = React.useState(false);

    const onSignup = async () =>{
        try {

            setLoading(true);
            const response = await axios.post("api/users/signup",user);
            console.log("SignUp success",response.data);
            toast.success("Successfully Signed up");
            router.push('/login');
            
        } catch (error:any) {
            console.log("SignUp failed",error.message);
            
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{

        if(user.email.length > 0 && user.password.length >0 && user.username.length > 0){
            setButtonDisabled(false);
        }else {
            setButtonDisabled(true);
        }

    },[user]);

    return(
       <>
       <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>{loading?"Processing":"Signup"}</h1>
            <label htmlFor="username">Username</label>
            <input
            className="text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({
                ...user,username: e.target.value
            })}
            placeholder="username"
            />
            <hr/>
            <label htmlFor="email">Email</label>
            <input
            className="text-black"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({
                ...user,email: e.target.value
            })}
            placeholder="email"
            />
            <hr/>
            <label htmlFor="password">Password</label>
            <input
            className="text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({
                ...user, password: e.target.value
            })}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            >{buttonDisabled?"Fill the details":"Signup now"}</button>
            <Link href='/login'>Login instead</Link>
       </div>
       </>
    )
}


