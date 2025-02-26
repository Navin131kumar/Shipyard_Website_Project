import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const UserManagement = () => {
  const{tenderAppData} = useContext(AdminContext)
  console.log(tenderAppData)
  return (
    <div className='ml-20 py-10'>
      <h1 className='text-3xl ' >Order Management</h1>
<div className='grid md:grid-cols-2 grid-cols-1 gap-5 py-10 '>
      {
        tenderAppData.map((e)=>{
            return(
                <>
                    <div className="flex flex-col  border border-black p-3 rounded-lg gap-3">
                
                <div className='flex flex-col gap-2'>
                  <div className="grid gap-5 grid-cols-2">
                    <p>Ship Type:</p>
                    <p>{e.shipType}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Status:</p>
                    <p>{e.status}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Technology</p>
                    <p>{e.preferredTechnology}</p>
                  </div>
                  <div className='grid grid-cols-2'>
                    <p>Order Placed By</p>
                    <p>{e.userId?.name}</p>
                  </div>
                </div>
              </div>
                </>
            )
        })
      }
      </div>
    </div>
  )
}

export default UserManagement