import AdminManage from "./adminUserManage";
import { useState } from "react";

const UserEntry=()=>{
  const [users, setUsers] = useState([
    { username: null, firstname:null, lastname:null, email: null,contact:null,userid:null },
  ]);

  const handleUserChange = (index, field, value) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index] = { ...updatedUsers[index], [field]: value };
      return updatedUsers;
    });
  };
    
    return (
        <div>
          <AdminManage users={users} />
        </div>
      );
};
export default  UserEntry;