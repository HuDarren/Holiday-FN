import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../store/item";
import { fetchWishList } from "../../store/wishlist";

function WishItemHome(props) {
  React.useEffect(() => {
    props.fetchWishList(props.user.id);
    const target = props.history.location.pathname.split("/")[
      props.history.location.pathname.split("/").length - 1
    ];
    props.fetchItem(target);
  }, []);

  return (
    <div>
      <div>List of all items</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  wishList: state.wishList,
  item: state.item,
});

const mapDispatch = (dispatch) => ({
  fetchItem: (id) => dispatch(fetchItem(id)),
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
});

export default connect(mapState, mapDispatch)(WishItemHome);
