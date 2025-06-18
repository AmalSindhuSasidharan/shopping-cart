import React, { useState, useEffect } from "react";

const UserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const returnUserData = async () => {
      const response = await fetch("https://fakestoreapi.com/users/1");
      const result = await response.json();
      setUserData(result);
    };
    returnUserData();
  }, []);

  return (
    <div>
      <h1>User Info</h1>
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
