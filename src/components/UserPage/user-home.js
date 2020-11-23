import React from "react";
import UserProfile from "./user-profile";
import UserWishList from "./user-wishlist";

function UserHome() {
  return (
    <div>
      <UserProfile />
      <UserWishList />
    </div>
  );
}

export default UserHome;
