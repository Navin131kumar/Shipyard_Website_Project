import React, { useContext } from 'react'
import {CircleAlert, CookingPot, Activity, TrendingUpDown} from 'lucide-react'
import { AdminContext } from '../context/AdminContext'

const Dashboard = () => {
  const {userData,stockData,tenderData} = useContext(AdminContext); 
  return (
    <div className=' m-5'>
      <div className=' flex flex-wrap gap-3'>

        <div className=' flex items-center  gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <CircleAlert />
          <div>
            <p className=' text-xl font-semibold text-gray-600'>{userData.length}</p>
            <p className=' text-gray-400'> Users </p>
          </div>
        </div>
        
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <Activity />
          <div>
            <p className=' text-xl font-semibold text-gray-600'>{stockData.length}</p>
            <p className=' text-gray-400'> Stocks </p>
          </div>
        </div>
        
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <TrendingUpDown />
          <div>
            <p className=' text-xl font-semibold text-gray-600'>{tenderData.length}</p>
            <p className=' text-gray-400'> Tender </p>
          </div>
        </div>
      </div>

      <div className=' bg-white'> 
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
            <CookingPot />  
          <p className=' font-semibold'>Latest Tender</p>
        </div>

        {/* <div className=' pt-4 border border-t-0'>
          {
            dashData.latestAppointments.map((items,index)=>(
              <div className=' flex items-center gap-3 px-6 hover:bg-gray-100 py-3' key={index}>
                <img className=' rounded-full w-10' src={items.docData.image} alt="" />
                <div className=' flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{items.docData.name}</p>
                  <p className='text-gray-600'>{slotDateFormat(items.slotDate)}</p>
                </div>
                {
                    items.cancelled ? <p className='text-red-400 text-xs font-medium'>Cancelled</p> : items.isCompleted ? <p className=' text-green-500 font-medium text-xs'>Completed</p> :
                    <img onClick={()=>cancelAppointment(items._id)} className=' w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                }
              </div>
            ))
          }
        </div> */}
      </div>
      
      

    </div>
  )
}

export default Dashboard