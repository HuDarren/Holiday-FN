import React from "react";
import UserProfile from "./user-profile";
import UserWishList from "./user-wishlist";
import UserWishListForm from "./user-wishlistForm";

function UserHome() {
  return (
    <div>
      <UserProfile />
      <UserWishListForm />
      <UserWishList />
    </div>
  );
}

export default UserHome;
