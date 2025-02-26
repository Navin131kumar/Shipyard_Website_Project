import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import TenderSubmit from '../components/TenderSubmit'


const Tender = () => {
  const {allTender,setTenderData, token, backendUrl, tenderid} = useContext(AppContext)
  console.log(allTender);

  return (
    <div className=' sm:px-[10%] px-6 pt-28 pb-20'>
      <div>
        <div className=' py-3 text-center font-bold text-base md:text-2xl font-[poppins] text-[]'> 
          <p>All tenders</p>
        </div>
        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' >
          {
            allTender.map((e,index)=>(
              <div key={index} className=' border p-4 rounded-lg'>
                <p className='font-[poppins] '>{e.name}</p>
                <p>{e.deadline}</p>
                <p>{e.status}</p>
                <p>{e.description}</p>
                <TenderSubmit tenderId={e._id}/>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Tender