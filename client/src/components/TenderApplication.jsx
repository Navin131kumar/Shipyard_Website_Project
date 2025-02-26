import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const TenderApplication = () => {
    const {tenderData} = useContext(AppContext);
    console.log(tenderData);
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <p>My Tender Application</p>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
      {
        tenderData.map((e)=>{
            return(
                <>
                    <div className="flex flex-col  border border-black p-3 rounded-lg gap-3">
                
                <div>
                  <div className="grid grid-cols-2">
                    <p>Tender ID</p>
                    <p>{e.tenderId.name }</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Status</p>
                    <p>{e.status}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Bid Amount</p>
                    <p>{e.bidAmount}</p>
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

export default TenderApplication
