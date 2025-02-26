import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AdminContext } from '../context/AdminContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {backendUrl} = useContext(AdminContext)

    const onSubmitHandler = async (event) =>{
        event.preventDefault()

        try {
            const {data} = await axios.post(backendUrl + 'api/auth/login', {email,password})

            localStorage.setItem('aToken',data.token)
            toast.success("Admin Logged in successfully")
            window.location.href = '/admin-dashboard';

        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
        }
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler} className=" min-h-[80vh] flex items-center">
            <div className=" flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
                <p className='text-3xl text-center w-full'>Hi Admin !</p>
                <p className=" text-2xl font-semibold m-auto"><span className=" text-primary"></span>Login</p>
                <div className=" w-full">
                    <p>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} className=" border border-[#DADADA] rounded w-full p-2 mt-1" type="email" required />
                </div>
                <div className=" w-full">
                    <p>Password</p>
                    <input onChange={(e)=> setPassword(e.target.value)} className=" border border-[#DADADA] rounded w-full p-2 mt-1" type="password" required />
                </div>
                <button className=" bg-primary  w-full py-2 rounded-md text-base border border-black bg-[#ff6600] text-white">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login