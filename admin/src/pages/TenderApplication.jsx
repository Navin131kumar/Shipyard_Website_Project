import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext';
import TenderUpdateButton from '../components/TenderUpdateButton';
import AddTenderForm from '../components/AddTender';

const TenderApplication = () => {
  const {tenderData} = useContext(AdminContext);
  console.log(tenderData);;

  return (
    <div className='ml-20 py-20'>
      <div>
        <p className='text-3xl'>Tender Management</p>
        </div> 
      <h1>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-10'>
      {
        tenderData.map((e)=>{
            return(
                <>
                    <div className="flex flex-col  border border-black p-3 rounded-lg gap-3">
                
                <div className='flex flex-col gap-2'>
                  <div className="grid gap-5 grid-cols-2">
                    <p>Tender Name:</p>
                    <p>{e.name}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Status:</p>
                    <p>{e.status}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Descripition</p>
                    <p>{e.description}</p>
                  </div>
                  <TenderUpdateButton tenderId={e._id}></TenderUpdateButton>
                </div>
              </div>
                </>
            )
        })
      }
      </div>
      </h1>
      <AddTenderForm></AddTenderForm>
      
    </div>
  )
}

export default TenderApplication