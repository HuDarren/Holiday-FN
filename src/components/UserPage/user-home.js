import React from "react";
import UserProfile from "./user-profile";
import WishListHome from "../WishListPage/wishlist-home";
import GroupHome from "../GroupPage/group-home";
import FriendHome from "../FriendPage/friend-home";
import GroupListView from '../GroupPage/group-list-view';

function UserHome() {
  return (
    <div>
      <UserProfile />
      <WishListHome />
      <GroupHome />
      <FriendHome />
      <GroupListView />
    </div>
  );
}

export default UserHome;
