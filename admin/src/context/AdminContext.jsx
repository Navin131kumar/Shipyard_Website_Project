import React, { useEffect, useState } from 'react'
import { createContext } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminContext = createContext()
const AdminContextProvider = (props) => {
  const [tenderAppData, setTenderAppData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [tenderData, setTenderData] = useState([]);
  const [vigilanceData, setVigilanceData] = useState([]);

  const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getUserData = async () => {
    try {

      const {data} = await axios.get(backendUrl+'api/users', {
        headers: {
          Authorization: `Bearer ${aToken}`
        }
      })

      setUserData(data)

      toast.success(data.message)
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  const getExportApplication = async () => {
    try {

      const {data} = await axios.get(backendUrl+'api/orders', {
        headers: {
          Authorization: `Bearer ${aToken}`
        }
      })

      setTenderAppData(data)

      toast.success(data.message)
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  const getStockData = async () => {
    try {

      const {data} = await axios.get(backendUrl+'api/stock', {
        headers: {
          Authorization: `Bearer ${aToken}`
        }
      })

      setStockData(data)

      toast.success(data.message)
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  const getVigilanceData = async () => {
    try {

      const {data} = await axios.get(backendUrl+'api/vigilance', {
        headers: {
          Authorization: `Bearer ${aToken}`
        }
      })

      setVigilanceData(data)

      toast.success(data.message)
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }
  
  const getTenderData = async () => {
    try {

      const {data} = await axios.get(backendUrl+'api/tenders', {
        headers: {
          Authorization: `Bearer ${aToken}`
        }
      })

      setTenderData(data)

      toast.success(data.message)
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

    name = "sjc"
    const value = {
        name,
        aToken,
        setAToken,
        backendUrl,
        setUserData,
        userData,
        stockData,
        setStockData,
        tenderData,
        tenderAppData,
        vigilanceData
    }
    useEffect(() => {
        if (aToken) {
            getUserData()
            getStockData()
            getTenderData()
            getExportApplication()
            getVigilanceData()
        }
    }, [aToken]);
  return (
    <AdminContext.Provider value={value}>
        {props.children} 
    </AdminContext.Provider>
  )
}

export default AdminContextProvider