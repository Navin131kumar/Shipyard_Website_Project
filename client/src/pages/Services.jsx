import React from 'react'
import { services } from '../assets/api/services'
import ServiceCard from '../components/ServiceCard'
import OrderRequestForm from './OrderRequest'

const Services = () => {
  return (
    <div className=' sm:px-[10%] px-6 pt-28 pb-20'>
      <div>
        <h1 className='font-bold text-start text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Services</h1>
        <p className=' text-base md:text-[40px] font-[poppins] text-start font-bold py-3'>Explore Our Services</p>

        <div className=' grid grid-cols-1'>
        <div  className=' cursor-pointer py-10'>
        <div className=' rounded-lg transition-all  grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className=  'order-1 md:order-2'>
            <img src="" alt="Service Image" className=' rounded-lg' />
          </div>
          <div className='order-1 md:order-2 flex flex-col justify-between' >
              <p className=' font-[poppins] text-base md:text-lg font-bold pt-3'>Ship Building</p>
              <p className=' text-slate-700 py-2 text-[18px]'>Ship Building focuses on designing and constructing commercial, military, and specialized ships using advanced materials for durability and efficiency. It integrates modern navigation and automation systems while ensuring compliance with international maritime regulations, offering custom-built solutions tailored to various industries</p>
              <div className=' flex items-center justify-center py-2'>
              <button className=' bg-[#FF6600] py-2 px-6 rounded-lg text-center hover:bg-white hover:text-[#FF6600] hover:border-[#ff6600] border text-white hover:-translate-y-2 transition-all'></button>
              </div>

          </div>
        </div>
    </div>
        </div>
        <OrderRequestForm></OrderRequestForm>
      </div>
    </div>
  )
}

export default Services