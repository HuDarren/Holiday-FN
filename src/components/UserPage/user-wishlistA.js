import React from "react";
import UserWishListB from "./user-wishlistB";

function UserWishListA(props) {
  console.log(props.list);
  return (
    <div>
      <div>{props.wList.title}</div>
      <div>
        {props.list.map((item, index) => (
          <UserWishListB key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default UserWishListA;
