import React from 'react'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AdminContext } from '../context/AdminContext'


const Navbar = () => {

    const navigate = useNavigate()
    const {backendUrl} = useContext(AdminContext)
    const aToken = localStorage.getItem('aToken')

    const logout = ()=>{
        navigate('/login')
        aToken && localStorage.removeItem('aToken')
    }

  return (
    <div className=" flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
        <div className=" flex items-center gap-2 text-xs">
            {/* <img className=" w-36 cursor-pointer sm:w-40" src={assets.admin_logo} alt="" /> */}
            <p className=" border px-2.5 rounded-full py-0.5 border-gray-500 text-gray-600">{'Admin'}</p>
        </div>
        <button className=" bg-primary bg-red-500 text-white text-sm px-10 py-2 rounded-full" onClick={logout}>{aToken?(<>Logout</>):(<></>)}</button>
    </div>
  )
}

export default Navbar