import React from 'react';
import { connect } from 'react-redux';
import { fetchWishList } from '../../store/wishlist';
import WishListViewB from './wishlist-viewB';
import { removeSingleWishListThunk } from '../../store/wishlist';
import { Link } from 'react-router-dom';

function WishListView(props) {
  React.useEffect(() => {
    props.fetchWishList(props.match.params.id);
  }, []);

  console.log('props', props);

  return (
    <div>
      <div> Your Wishlists </div>
      <div className="wishview-container">
        <div className="wishview2-container">
          {props.wishList.length ? (
            <div className="wishview3-container">
              {props.wishList.map((item) => {
                const name = item.name;
                const description = item.description;
                const key = item.id;
                const image = item.image;
                return (
                  <WishListViewB
                    key={key}
                    name={name}
                    image={image}
                    description={description}
                    number={key}
                    removeWishList={props.deleteWishList}
                    isLoggedIn={props.isLoggedIn}
                    userId = {props.user.id}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div>
        {props.isLoggedIn && props.wishList.length ? (
          <div>
            {props.user.id === props.wishList[0].userId ? (
              <Link to="/wishListForm">ADD</Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.wishList,
  user: state.user,
  isLoggedIn: !!state.user.id,
});

const mapDispatch = (dispatch) => ({
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
  deleteWishList: (wishListId) =>
    dispatch(removeSingleWishListThunk(wishListId)),
});

export default connect(mapState, mapDispatch)(WishListView);
