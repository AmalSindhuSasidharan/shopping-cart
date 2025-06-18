import React, { useState, useEffect } from "react";
import axios from "axios";

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const returnUserData = async () => {
      const response = await axios.get("https://fakestoreapi.com/users/1");
      setUserData(response.data);
    };
    returnUserData();
  }, []);

  return (
    <div>
      <h1>User Info</h1>
      {!userData && <p>Loading User Data...</p>}
      {userData && (
        <>
          Name: {userData.name.firstname} {userData.name.lastname} <br />
          UserName : {userData.username} <br />
          EmailId: {userData.email}
          <br />
          Address : {userData.address.number}, {userData.address.street},{" "}
          {userData.address.city}, {userData.address.zipcode}
        </>
      )}
    </div>
  );
};

export default UserPage;
