import React from 'react'
import { Aboutimg, ser1, ser2, ser3 } from '../assets/api/image'
import {Globe, Truck} from 'lucide-react'
import CompanyCard from '../components/CompanyCard'

const About = () => {
  return (
    <div>
       <section className="bg-white py-28 px-6 md:px-16 lg:px-24 flex flex-col gap-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src={Aboutimg}
            alt="Logistics Image"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h5 className="text-blue-500 uppercase font-semibold text-sm">About Us</h5>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Quick Transport and Logistics Solutions
          </h2>
          <p className="text-gray-600 mt-4">
            We specialize in seamless, efficient, and timely logistics solutions tailored 
            to meet diverse business needs. Our commitment to speed, security, and 
            global connectivity ensures that your shipments arrive safely and on time.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <div className="flex items-start">
              <Globe className="text-red-500 w-10 h-10 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">Global Coverage</h4>
                <p className="text-gray-600 text-sm">
                  With a vast network spanning across continents, we ensure reliable 
                  and seamless global shipping solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Truck className="text-red-500 w-10 h-10 mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">On Time Delivery</h4>
                <p className="text-gray-600 text-sm">
                  Our efficient supply chain and logistics management guarantee 
                  punctual deliveries, keeping your business running smoothly.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <div className=" 2xl:container mx-auto ">
        <div className=" lg:w-[90%] mx-auto w-[90%] mt-20">
          <div className=" flex flex-col items-center justify-center py-10">
            
            <h1 className=" font-[poppins] text-[42px] font-black text-center text-wrap">How Professional Shipyard Services <br />
            Can Drive <span className=" text-[#ff6600]"> Success.</span></h1>
          </div>
          <div className=" pt-10">
            <CompanyCard/>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About