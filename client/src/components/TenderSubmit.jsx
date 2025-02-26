import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const TenderSubmit = ({tenderId}) => {

    const {token, backendUrl} = useContext(AppContext)

    const [update, setUpdate] = useState(false)
    const [bidAmount, setBitAmount] = useState("")
    const companyName = JSON.parse(localStorage.getItem("user")).company

    console.log(tenderId, bidAmount, companyName);

    const applyTender = async () =>{
        if (!token) {
          return navigate('/login')
        } 
    
        try {
          
          const res = await axios.post(backendUrl + '/api/tender-applications', {tenderId,bidAmount, companyName}, {headers: {Authorization: `Bearer ${token}`}})
    
          toast.success("Tender applied successfully")
          setUpdate(false)
          console.log(res.data);
          
        } catch (error) {
          console.log(error);
          toast.error("Tender post error")
        }
    
    }
  return (
    <div>
        {
            update ?
            <input type="text" value={bidAmount} onChange={(e)=> setBitAmount(e.target.value)} name="bitamount" id="bitamount" className=' pl-2 my-2 py-1 border outline-none w-full' placeholder='Enter the bit amount'/>
            : ""
        } 
        <div className=' '>
            {
            update ?
            <div className=' w-full flex items-center gap-5 justify-between'>
                <div className='  px-4 my-2 hover:border hover:border-[#24cb6a] bg-[#24cb6a] rounded-lg w-fit flex justify-center text-white hover:bg-white border hover:text-[#24cb6a] py-2'>
                    <button className=' font-[poppins] flex justify-center' onClick={applyTender} >Submit</button> 
                </div>
                <div className='  px-4 my-2 hover:border hover:border-[#ff6600] bg-[#FF6600] rounded-lg w-fit flex justify-center text-white hover:bg-white border hover:text-[#FF6600] py-2'>
                    <button className=' font-[poppins] flex justify-center' onClick={()=>setUpdate(false)}>Cancel</button>
                </div>
            </div>
                :
                <div className='  px-4 my-3 hover:border hover:border-[#ff6600] bg-[#FF6600] rounded-lg w-fit flex justify-center text-white hover:bg-white border hover:text-[#FF6600] py-2'>
                <button className=' font-[poppins] flex justify-center'  onClick={()=>setUpdate(true)}  >Apply Tender</button>
                </div>
            }
        </div>
    </div>
  )
}

export default TenderSubmit