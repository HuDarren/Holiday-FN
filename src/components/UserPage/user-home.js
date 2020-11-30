import React from "react";
import UserProfile from "./user-profile";
import UserWishList from "./user-wishlist";
import UserWishListForm from "./user-wishlistForm";
import WishListHome from "../WishListPage/wishlist-home";

function UserHome() {
  return (
    <div>
      <UserProfile />
      <WishListHome />
      {/* <UserWishListForm /> */}
      {/* <UserWishList /> */}
    </div>
  );
}

export default UserHome;
