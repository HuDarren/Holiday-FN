import React from "react";
import UserProfile from "./user-profile";
import WishListHome from "../WishListPage/wishlist-home";
import GroupHome from "../GroupPage/group-home";
import FriendHome from "../FriendPage/friend-home";

function UserHome() {
  return (
    <div>
      <div>
        <img
          className="userhome-image"
          alt=""
          src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1607294166/snowbg_hmx40h.jpg"
        ></img>
      </div>
      <UserProfile />
      <WishListHome />
      <GroupHome />
      <FriendHome />
    </div>
  );
}

export default UserHome;
