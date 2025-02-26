import React from 'react'
import { services } from '../assets/api/services'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className=' sm:px-[10%] px-6 pt-28 pb-20'>
      <div>
        <h1 className='font-bold text-start text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Services</h1>
        <p className=' text-base md:text-[40px] font-[poppins] text-start font-bold py-3'>Explore Our Services</p>

        <div className=' grid grid-cols-1'>
            {
                services.map((e,index)=>(
                    <div key={index}>
                        <ServiceCard img={e.img} service={e.serivce} des={e.des} id={e.id} button={e.button}/>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Services