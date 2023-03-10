import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";

export const User = () => {
  const serverUrl = "https://jsonplaceholder.typicode.com/users"
  
  
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(serverUrl) 
      .then((res) => {
        console.log(res.data);
        setUser(() => {
          return res.data;
        });
      }) 
      .catch((err) => {
        console.log(err);
      }); 
  }, [serverUrl]);

  return (
    <>
      <UserTable user={user} />
    </>
  );
};
