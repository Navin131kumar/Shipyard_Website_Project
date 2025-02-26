import React from 'react'
import { NavLink } from 'react-router-dom'
import {CircleAlert,RailSymbol, CircleGauge, TentTree, UserCheck} from 'lucide-react'


const SideNavbar = () => {
  return (
    <div>
      <div>
        <ul className=' text-[#515151] mt-5'>
          
          <NavLink className={({isActive})=> ` flex items-center gap-3 py-3.5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#ff6600]' : ""}`} to={'/admin-dashboard'}>
              {/* <img src={assets.home_icon} alt="" /> */}
              <CircleGauge />
              <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive})=> ` flex items-center gap-3 py-3.5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#ff6600]' : ""}`} to={'/all-tenders'}>
              {/* <img src={assets.appointment_icon} alt="" /> */}
              <TentTree />
              <p>Tenders</p>
          </NavLink>

          <NavLink className={({isActive})=> ` flex items-center gap-3 py-3.5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#ff6600]' : ""}`} to={'/user-management'}>
              {/* <img src={assets.add_icon} alt="" /> */}
              <UserCheck />
              <p>Order Management</p>
          </NavLink>

          <NavLink className={({isActive})=> ` flex items-center gap-3 py-3.5 px-5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#ff6600]' : ""}`} to={'/vigilance'}>
              {/* <img src={assets.people_icon} alt="" /> */}
              <RailSymbol />
              <p>Vigilance Management</p>
          </NavLink>

        </ul>
      </div>
    </div>
  )
}

export default SideNavbar