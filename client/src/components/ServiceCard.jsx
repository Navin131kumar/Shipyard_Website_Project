import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({img, des, service, id,button}) => {
    const navigate = useNavigate();
  return (
    <div  className=' cursor-pointer py-10'>
        <div className=' rounded-lg transition-all  grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className={id%2===0 ? 'order-2 md:order-1' : 'order-1 md:order-2'}>
            <img src={img} alt="Service Image" className=' rounded-lg' />
          </div>
          <div className={id%2===0 ? 'order-1 md:order-2 flex flex-col justify-between' : 'order-2 md:order-1 flex flex-col justify-between'}>
              <p className=' font-[poppins] text-base md:text-lg font-bold pt-3'>Ship Building</p>
              <p className=' text-slate-700 py-2 text-[18px]'>Ship Building focuses on designing and constructing commercial, military, and specialized ships using advanced materials for durability and efficiency. It integrates modern navigation and automation systems while ensuring compliance with international maritime regulations, offering custom-built solutions tailored to various industries</p>
              <div className=' flex items-center justify-center py-2'>
              <button className=' bg-[#FF6600] py-2 px-6 rounded-lg text-center hover:bg-white hover:text-[#FF6600] hover:border-[#ff6600] border text-white hover:-translate-y-2 transition-all'>Order Now</button>
              </div>

          </div>
        </div>
    </div>
  )
}

export default ServiceCard