import axios from 'axios';
import React, { createContext, useState ,useEffect} from 'react'
import { toast } from 'react-toastify';
// import { teams } from '../assets/api/teams';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // const [team, setTeam] = useState([])
    const name = "SJC"

    // const [team, setTeam] = useState([])
    const [tenderData, setTenderData] = useState([])
    const [stockData, setStockData] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token , setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false )
    const [userdata, setUserdata] = useState(false)
    const [tenderid, setTenderId] = useState([{}])
    const [exportData,setExport] = useState([])
    const [allTender, setAllTender] = useState([])
    const [tenderUser , setTenderUser] = useState([])
    
    const logout =()=>{
        localStorage.removeItem('token')
        setToken(false)
    }
    const gettenderData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/tenders`, {
                method: "GET",
               
            });
            setAllTender(response.data)
        } catch (error) {
            console.error("Error:", error);
        }
    }
    const getStockData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/stock`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,	
                },
            });
            setStockData(response.data)
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {  
        gettenderData(),
        getStockData()

    }, [])

    // get user data 
    const getUserData = async () =>{
      try {  
            const res = await axios.get(backendUrl + '/api/users/profile' , {headers: {Authorization: `Bearer ${token}`}})
            if(res){
                setUserdata(res.data)
            }else{
                toast.error(data.message)
            }
          } catch (error) {
              console.log(error)
              toast.error("Failed to fetch user data")
          }
      }
      const exportRequsest = async()=>{
        try{

          const res = await axios.get(backendUrl + '/api/exports/my-exports', {headers
          : {Authorization: `Bearer ${token}`}})
          setExport(res.data)
          console.log(res.data)
          toast.success("Export request fetched successfully");    
        }catch(error){
          console.log(error);
        }

      }
      const tenderUserData = async()=>{
        try{

          const res = await axios.get(backendUrl+"/api/tender-applications/my-applications",{
            headers:{
              Authorization: "Bearer "+token
            }
          })
          setTenderData(res.data);
          toast.success(res.data.message);
        }catch(error){
          console.log(error);
        }
      }
    const value = {
        backendUrl,
        token,
        setToken,
        logout,
        userdata,
        setUserdata,
        getUserData,
        stockData,
        setStockData,
        exportData,
        setExport,
        tenderData,
        setTenderData,
        tenderid,
        setTenderId,
        stockData,
        allTender,
        setAllTender,
    }

    useEffect(()=>{
      if (token) {
          getUserData()
          exportRequsest()
          tenderUserData()
          gettenderData()
      }else{
          setUserdata(false)
      }

  },[token])
  return (
    <AppContext.Provider value={value}> 
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider