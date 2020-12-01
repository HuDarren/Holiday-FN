import React from "react";
import { connect } from "react-redux";
import { fetchWishList } from "../../store/wishlist";

function WishListView(props) {
  React.useEffect(() => {
    props.fetchWishList(props.user.id);
  }, []);

  console.log(props.wishList[0].name);
  return (
    <div>
      <div> List of all WishList</div>
      <div>{props.wishList[0].name}</div>
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
});

export default connect(mapState, mapDispatch)(WishListView);
