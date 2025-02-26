import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets/api/image";
import { AppContext } from '../context/AppContext';
import { assets } from "../assets/assets";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const {token, logout, userdata} = useContext(AppContext)
  

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="w-full sm:px-[10%] mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to={'/'}>
              <li className='py-1 list-none font-[poppins]'>Home</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/about-us'}>
              <li className='py-1 list-none font-[poppins]'>About Us</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/services'}>
              <li className='py-1 list-none font-[poppins]'>Services</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/tender'}>
              <li className='py-1 list-none font-[poppins]'>Tender</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/team'}>
              <li className='py-1 list-none font-[poppins]'>Team</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/vigilance'}>
              <li className='py-1 list-none font-[poppins]'>Vigilance</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/contact-us'}>
              <li className='py-1 list-none font-[poppins]'>Contact Us</li>
              <hr className='border-none outline-none bg-primary h-0.5 w-3/4 m-auto hidden'/>
            </NavLink>
            
            {
               token && userdata ?<>
                  <div className=' flex items-center gap-2 cursor-pointer group relative'>
                    <img className=' w-8 rounded-full' src={userdata.image} alt="" />
                    <img className=' w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className=' group-hover:block hidden absolute top-0 bg-gray-50/8 right-0 pt-14 text-base font-medium text-black z-20'>
                      <div className='min-w-48 rounded flex flex-col gap-4 p-4 '>
                          <p onClick={()=> navigate('/my-profile')} className=' hover:text-[#FF6600] text-red-700 cursor-pointer'>My Profile</p>
                          <p onClick={logout} className=' hover:text-[#FF6600] cursor-pointer text-red-700'>Logout</p>
                      </div>
                    </div>  
                  </div>
               </> : 
               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-[poppins]" onClick={()=> navigate("/login")}>Create User</button>
            }

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <NavLink to={'/'} className="block text-gray-700 px-4 py-2 hover:bg-gray-100 font-[poppins]">Home</NavLink>
          <NavLink to={'/about-us'} className="block text-gray-700 px-4 py-2 hover:bg-gray-100 font-[poppins]">About Us</NavLink>
          <NavLink to={'/services'} className="block text-gray-700 px-4 py-2 hover:bg-gray-100 font-[poppins]">Services</NavLink>
          <NavLink to={'/tender'} className="block text-gray-700 px-4 py-2 hover:bg-gray-100 font-[poppins]">Tender</NavLink>
          <NavLink to={'/vigilance'} className="block text-gray-700 px-4 py-2 hover:bg-gray-100 font-[poppins]">Vigilance</NavLink>
          <NavLink to={'/contact-us'} className="block text-gray-700 px-4 py-2 hover:bg-gray-100 font-[poppins]">Contact Us</NavLink>
          <button className="w-full bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600 font-[poppins]">Create User</button>
        </div>
      )}
    </nav>
  );
}
