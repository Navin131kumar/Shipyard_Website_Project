import React from 'react'
import { heads, Supervisors, teams } from '../assets/api/teams'
import TeamCard from '../components/TeamCard'
import { Star } from 'lucide-react'
import { team2 } from '../assets/api/image'

const Team = () => {
  return (
    <div className=' px-6 sm:px-[10%] mx-auto pt-28 pb-20'>
        <div className=''>
            <h1 className='font-bold text-center text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Team</h1>
            <p className=' text-base md:text-[40px] font-[poppins] text-center font-bold py-3'>Expert Team Members</p>

            <div className=' flex items-center justify-center w-full py-10'>
                <div className='bg-gray-50 p-3 rounded-lg hover:shadow-2xl shadow-lg hover:-translate-y-2 transition-all border'>
                    <div className=' w-[300px] pb-20 relative'>
                        <img src={team2} alt="team_image" className=' w-[300px] h-[300px]' />
                        <div className=' absolute bottom-0'>
                            <p className=' font-[poppins] text-sm md:text-lg font-bold pt-1'>President</p>
                            <p className=' text-slate-700 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores!</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='font-bold text-start text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Team</h1>
            <p className=' text-base md:text-[40px] font-[poppins] text-start font-bold py-3'>Head Officers</p>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
                {
                    heads.map((e, index)=>(
                        <div key={index}>
                            <TeamCard img={e.img} bio={e.bio} role={e.role} name={e.name}/>
                        </div>
                    ))
                }
            </div>

            <h1 className='font-bold text-start text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Team</h1>
            <p className=' text-base md:text-[40px] font-[poppins] text-start font-bold py-3'>Managers</p>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
                {
                    heads.map((e, index)=>(
                        <div key={index}>
                            <TeamCard img={e.img} bio={e.bio} role={e.role}/>
                        </div>
                    ))
                }
            </div>

            <h1 className='font-bold text-start text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Team</h1>
            <p className=' text-base md:text-[40px] font-[poppins] text-start font-bold py-3'>Supervisors</p>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10'>
                {
                    Supervisors.map((e, index)=>(
                        <div key={index}>
                            <TeamCard img={e.img} bio={e.bio} role={e.role}/>
                        </div>
                    ))
                }
            </div>

            <h1 className='font-bold text-start text-base text-[#77d9f4] font-[poppins] sm:text-2xl'>Our Team</h1>
            <p className=' text-base md:text-[40px] font-[poppins] text-start font-bold py-3'>Lead Engineers</p>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {
                teams.map((e,index)=>(
                  <div key={index}>
                    <TeamCard img={e.img} name={e.name} bio={e.bio} role={e.role}/>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Team