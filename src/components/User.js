import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";

export const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`) 
      .then((res) => {
        console.log(res.data);
        setUser(() => {
          return res.data;
        });
      }) 
      .catch((err) => {
        console.log(err);
      }); 
  }, []);

  return (
    <>
      <UserTable user={user} />
    </>
  );
};
