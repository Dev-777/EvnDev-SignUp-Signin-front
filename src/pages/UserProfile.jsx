import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { homeReducer } = useSelector((state) => state);
  return (
    <div>
      Welcome to your profile <h1>{homeReducer.user}</h1>
    </div>
  );
};

export default UserProfile;
