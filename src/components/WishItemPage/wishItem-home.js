import React from "react";
import { connect } from "react-redux";
import { fetchItem } from "../../store/item";
import { fetchWishList } from "../../store/wishlist";
import WishItemView from "./wishItem-view";
import { removeSingleItemThunk } from "../../store/item";
import { Link } from "react-router-dom";

function WishItemHome(props) {
  React.useEffect(() => {
    props.fetchWishList(props.user.id);
    const target = props.history.location.pathname.split("/")[
      props.history.location.pathname.split("/").length - 1
    ];
    props.fetchItem(target);
  }, []);

  const target = props.history.location.pathname.split("/")[
    props.history.location.pathname.split("/").length - 1
  ];

  return (
    <div>
      <div>List of all items</div>
      <div>
        {props.item.length ? (
          <div>
            {props.item.map((item) => {
              const name = item.name;
              const description = item.description;
              const key = item.id;
              const image = item.image;
              return (
                <WishItemView
                  key={key}
                  number={key}
                  name={name}
                  description={description}
                  image={image}
                  deleteItem={props.deleteItem}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <button>
        <Link to={`/itemForm/${target}`}>ADD</Link>
      </button>
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
  deleteItem: (itemId) => dispatch(removeSingleItemThunk(itemId)),
});

export default connect(mapState, mapDispatch)(WishItemHome);
