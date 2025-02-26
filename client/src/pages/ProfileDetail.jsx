import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import ProductForm from "../components/CreateStock";

const ProfileDetail = () => {
  const { userdata, getUserData , setUserdata, backendUrl, token  } = useContext(AppContext);
  console.log(userdata);
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState(false)

  const [isEdit, setIsEdit] = useState(false)
  const [image,setImage] = useState(false)

   const updateUserProfileData = async ()=>{
      try {
         
         const formData = new FormData()
         
         formData.append('name', userdata.name)
         formData.append('contact', userdata.contact)
         formData.append('company', userdata.company)

         image && formData.append('image', image)

         const {data} = await axios.post(backendUrl + '/api/users/update-profile', formData, {headers: {Authorization: `Bearer ${token}`}})

         if (data) {
            toast.success(data.messagex)
            await getUserData()
            setIsEdit(false)
            setImage(false)
         } else {
            toast.error(data.message)
         }
      } catch (error) {
         console.log(error);
         toast.error(error.message)
      }
   }

  return (
    <div className=" px-6 sm:px-[10%] mx-auto ml-10 grid grid-cols-1 md:grid-cols-2 gap-10  pb-20">

      <div className=" max-w-lg flex flex-col gap-2 text-sm">
        {isEdit ? (
          <label htmlFor="image">
            <div className=" inline-block relative cursor-pointer ">
              <img
                className=" w-36 rounded opacity-75"
                src={image ? URL.createObjectURL(image) : userdata.image}
                alt=""
              />
              <img
                className=" w-1 absolute bottom-12 right-12"
                src={image ? "" : assets.dropdown_icon}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img className=" w-36 rounded" src={userdata.image} alt="" />
        )}
        {isEdit ? (
          <input
            className=" bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            type="text"
            value={userdata.name}
            onChange={(e) =>
                setUserdata((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className=" font-medium text-3xl text-neutral-800 mt-4">
            {userdata.name}
          </p>
        )}

        <hr className=" bg-zinc-400 h-[1px] border-none" />
        <div>
          <p className=" text-neutral-500 underline mt-3">
            {/* CONTACT INFORMATION */}
          </p>
          <div className=" grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className=" font-medium text-nowrap pr-1">Email id:</p>
            <p className=" text-blue-500">{userdata.email}</p>
          </div>
          <div>
            <p className=" text-neutral-500 underline mt-3">
              {/* BASIC INFORMATION */}
            </p>
            <div className=" grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
              <p className=" font-medium pr-1">Company:</p>
              {isEdit ? (
                <input type="text" value={userdata.company} onChange={(e) => setUserdata((prev)=> ({...prev, company: e.target.value}))} />
              ) : (
                <p className=" text-gray-400">{userdata.company}</p>
              )}
              <p className=" font-medium pr-1">Contact:</p>
              {isEdit ? (
                <input
                  className=" bg-gray-100 max-w-28"
                  type="text"
                  value={userdata.contact}
                  onChange={(e) =>
                    setUserdata((prev) => ({ ...prev, contact: e.target.value }))
                  }
                />
              ) : (
                <p className=" text-gray-400">{userdata.contact}</p>
              )}
            </div>
            <div className=" mt-10">
              {isEdit ? (
                <button
                  className=" border border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] px-8 py-2 rounded-full hover:bg-primary hover:text-white"
                  onClick={updateUserProfileData}
                >
                  Save Information
                </button>
              ) : (
                <button
                  className=" border border-[#ff6600] text-[#ff6600] hover:bg-[#ff6600] px-8 py-2 rounded-full hover:bg-primary hover:text-white"
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
          
      </div>
      
      <ProductForm></ProductForm>
        

    </div>
  );
};

export default ProfileDetail;
