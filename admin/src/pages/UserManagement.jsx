import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const {aToken , backendUrl} = useContext(AdminContext) 
  
  useEffect(() => {
    fetchUsers();
  }, []);
 
  const fetchUsers = async () => {
    try {
      const response = await axios.get(backendUrl+"api/users",{headers:{
        Authorization: "Bearer "+aToken
      }});
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };
  

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Role</th>
            <th className="py-2 px-4 border">Company</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">{user.company || "N/A"}</td>
              <td className="py-2 px-4 flex space-x-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={async()=>{
                   try{
                    const response = await axios.delete(backendUrl+"api/users/"+user._id,{headers:{
                      Authorization: "Bearer "+aToken
                    }})
                    alert("User Deleted")
              
                  }catch(error){
                    console.log(error)
                  }
                }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
