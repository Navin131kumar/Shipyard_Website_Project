import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging:  () => (
        <div className='absolute -top-10 flex justify-center w-full'
            style={{
            width: "30px",
            color: "blue",
            }}
        >
            <p className=' w-2 h-2 rounded-full bg-white'></p>
        </div>),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className=''>
        <div>
            <Slider {...settings} className=' h-screen overflow-hidden'>
                <div className=' relative w-full h-screen bg-[url(https://ik.imagekit.io/snujhhriv/ship4.jfif?updatedAt=1740974260049)] bg-cover bg-center'> 
                    <div className='z-10 bg-black absolute top-0 w-full h-screen opacity-60 bottom-0'>
                    </div>
                    <div className=' absolute top-[33%] px-4 sm:px-[10%] z-50'>
                        <div className=' flex flex-col items-start gap-0'>
                            <p className=' font-bold text-[12px] md:text-lg text-white font-[poppins]'>Precision in Every Ship We Build</p>
                            <p className=' text-white text-[60px] md:text-[60px] lg:text-[70px] leading-tight font-bold font-[poppins]'>Engineering Excellence <br /> <span className=' text-[#77d9f4]'> in Shipbuilding</span></p>
                            <p className=' text-base font-[poppins] text-white md:w-[70%] py-2'>We design and construct state-of-the-art vessels, ensuring durability, efficiency, and innovation in every build. Join us in shaping the future of marine engineering.</p>
                            <button className=' bg-[#FF6600] text-white md:py-2 font-[poppins] md:px-6 rounded-lg py-3 px-6 md:text-base text-base my-5' onClick={()=>navigate("/login")}>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className=' relative w-full h-screen bg-[url(https://ik.imagekit.io/jjyo3gsee/img/carousel-1.jpg?updatedAt=1740122894219)] bg-cover bg-center'> 
                    <div className='z-10 bg-black absolute top-0 w-full h-screen opacity-60 bottom-0'>
                    </div>
                    <div className=' absolute top-[33%] px-4 sm:px-[10%] z-50'>
                        <div className=' flex flex-col items-start gap-0'>
                            <p className=' font-bold text-[12px] md:text-lg text-white font-[poppins]'>Innovating for a Sustainable Future</p>
                            <p className=' text-white text-[60px] md:text-[60px] lg:text-[70px] leading-tight font-bold font-[poppins]'>Building Stronger, <br /> <span className=' text-[#77d9f4]'> Greener Ships</span></p>
                            <p className=' text-base font-[poppins] text-white md:w-[70%] py-2'>Our commitment to sustainability drives us to create eco-friendly and fuel-efficient ships, revolutionizing the maritime industry.</p>
                            <button className='bg-[#FF6600] text-white md:py-2 font-[poppins] md:px-6 rounded-lg py-3 px-6 md:text-base text-base my-5' onClick={()=>navigate("/login")}>Learn More</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Home
