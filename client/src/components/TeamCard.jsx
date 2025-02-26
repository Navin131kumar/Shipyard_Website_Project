import { Star } from 'lucide-react'
import React from 'react'

const TeamCard = ({name, img, role, bio}) => {
  return (
    <div className=' py-5'>
        <div className=' bg-gray-50 p-3 rounded-lg hover:shadow-2xl shadow-lg hover:-translate-y-2 transition-all border'>
            <img src={img} alt="team_image" />
            <div>
                <p className=' font-[poppins] text-sm md:text-lg font-bold pt-1'>{name}</p>
                <p className=' font-[poppins] text-sm md:text-base font-bold py-1 text-slate-800'>({role})</p>
                <p className=' text-slate-700 text-sm'>{bio}</p>
                <div className=' flex items-center gap-1 py-2'>
                    <Star className=' stroke-[#FF6600] fill-[#FF6600]' size={16}/>
                    <Star className=' stroke-[#FF6600] fill-[#FF6600]' size={16}/>
                    <Star className=' stroke-[#FF6600] fill-[#FF6600]' size={16}/>
                    <Star className=' stroke-[#FF6600] fill-[#FF6600]' size={16}/>
                    <Star className=' stroke-[#FF6600]' size={16}/>
                    <p>(100+)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard