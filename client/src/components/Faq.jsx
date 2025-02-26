import { profile3 } from "../assets/api/image"
import { Phone } from "lucide-react"
import { useState } from "react"
import FaqAccodion from "./FaqAccodion"
const Faq = () => {
    const [open, setOpen] = useState(false)
    const toggle = (index) =>{
        if(open === index){
            return setOpen(null)
        }
        setOpen(index)
    }
    const accordionData = [
        {
            title:"What is the role of the Vigilance Department?",
            desc:"The Vigilance Department ensures transparency, accountability, and ethical practices within the organization. It helps prevent fraud, corruption, and any unethical behavior."
        },
        {
            title:"How can I report unethical practices?",
            desc:"You can report unethical practices by directly contacting the vigilance officers via email or phone. Confidentiality and whistleblower protection will be ensured."
        },
        {
            title:"What types of activities should be reported to Vigilance?",
            desc:"We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site."
        },
        {
            title:"Will my identity be protected if I report a vigilance issue?",
            desc:"Yes, the Vigilance Department follows strict confidentiality protocols to protect the identity of whistleblowers."
        },
    ]
  return (
    <>
        <div className=" 2xl:container mx-auto bg-white pb-20 py-14">
            <div className="lg:w-[90%] xl:w-[90%] mx-auto py-20 w-[90%]">
                <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <div className=" relative">
                        <div className="">
                            <img src={profile3} alt="Profile" className=" relative z-20"/>
                        </div> 
                        <div className=" absolute xl:absolute md:absolute xl:-right-3 xl:top-[524px] bg-[#002935] lg:absolute lg:top-[400px] lg:right-0 md:right-3 md:top-[604px] py-5 px-7 rounded-lg z-30">
                            <h1 className=" font-[poppins] text-[22px] font-bold text-wrap text-white">Contact Us For a <span className=" text-[#ff6600]">Free Learning</span>  <br className=" lg:hidden xl:block"/> Consulting Evaluation</h1>
                            <div className="flex items-center gap-1 py-3 px-3 bg-[#ff6600] mt-4 rounded-lg w-fit">
                                <Phone className=" stroke-white "/>
                                <p className="text-white"><a href="tel:+91 80729 48266">+91 80729 48266</a></p>
                            </div>
                        </div>
                    </div>
                    {/* FaqAccodion section  */}
                    <div className="mt-72 md:mt-40 lg:mt-0">
                        <div>
                            <div className=" flex items-center  gap-1">
                                <div className=" p-2 bg-[#6daaf590] rounded-full">
                                    <div className=" h-3 w-3 bg-[#ff6600] rounded-full shadow-yellow-300"></div>
                                </div>
                                <p className=" text-[#ff6600] font-bold font-[poppins] text-[18px]">FAQ</p>
                            </div>
                            <p className="text-[48px] font-[poppins] leading-[57px] pt-4 font-bold">Frequently Asked <br /> Questions</p>
                            <p className=" pt-5 font-[poppins]] text-[#6c6f70] text-[16px] pb-5" >Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.</p>
                            {
                                accordionData.map((data, index) =>{
                                    return(
                                        <>
                                            <FaqAccodion key={index} open={index===open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
                                        </>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq