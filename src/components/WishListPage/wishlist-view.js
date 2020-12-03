import React from "react";
import { connect } from "react-redux";
import { fetchWishList } from "../../store/wishlist";
import WishListViewB from "./wishlist-viewB";
import { removeSingleWishListThunk } from "../../store/wishlist";

function WishListView(props) {
  React.useEffect(() => {
    props.fetchWishList(props.user.id);
  }, []);

  return (
    <div>
      <div> List of all WishList</div>
      <div>
        {props.wishList.length ? (
          <div>
            {props.wishList.map((item) => {
              const name = item.name;
              const description = item.description;
              const key = item.id;
              return (
                <WishListViewB
                  key={key}
                  name={name}
                  description={description}
                  number={key}
                  removeWishList={props.deleteWishList}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <div>button to add new list</div>
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.wishList,
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
  deleteWishList: (wishListId) =>
    dispatch(removeSingleWishListThunk(wishListId)),
});

export default connect(mapState, mapDispatch)(WishListView);
