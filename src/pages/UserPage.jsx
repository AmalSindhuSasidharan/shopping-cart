import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserThunk } from "../redux/userSlice";

const UserPage = () => {
  const { loading, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, []);

  return (
    <div>
      <h1>User Info</h1>
      {loading && <p>Loading User Data...</p>}
      {user && (
        <>
          Name: {user.name.firstname} {user.name.lastname} <br />
          UserName : {user.username} <br />
          EmailId: {user.email}
          <br />
          Address : {user.address.number}, {user.address.street},{" "}
          {user.address.city}, {user.address.zipcode}
        </>
      )}
    </div>
  );
};

export default UserPage;
