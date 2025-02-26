import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const VigilanceManagement = () => {
  const{vigilanceData} = useContext(AdminContext)
  console.log(vigilanceData)
  return (
    <div className='ml-20 py-10'>
      <h1 className='text-3xl ' >Vigilant Management</h1>
<div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10 '>
      {
        vigilanceData.map((e)=>{
            return(
                <>
                    <div className="flex flex-col  border border-black p-3 rounded-lg gap-3">
                
                <div className='flex flex-col gap-2'>
                  <div className="grid gap-5 grid-cols-2">
                    <p>Type:</p>
                    <p>{e.type}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Status:</p>
                    <p>{e.status}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Description</p>
                    <p>{e.description}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Reported By</p>
                    <p>{e.reporterId?.name}</p>
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

export default VigilanceManagement