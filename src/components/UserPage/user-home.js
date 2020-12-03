import React from "react";
import UserProfile from "./user-profile";
import WishListHome from "../WishListPage/wishlist-home";

function UserHome() {
  return (
    <div>
      <UserProfile />
      <WishListHome />
    </div>
  );
}

export default UserHome;
