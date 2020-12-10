import React from 'react';
import { connect } from 'react-redux';
// import { fetchWishList } from '../../store/wishlist';
import WishListViewB from './wishlist-viewB';
// import { removeSingleWishListThunk } from '../../store/wishlist';
import { Link } from 'react-router-dom';
import WishListFollow from './wishlist-follow';
import {
  subToFriend,
  unSubToFriend,
  fetchWishList,
  removeSingleWishListThunk,
  fetchFollow,
} from '../../store';

function WishListView(props) {
  React.useEffect(() => {
    props.fetchWishList(props.match.params.id);
    // fix line below - can only be manually inputed and not use props
    props.fetchFollow(1);
  }, []);

  console.log('user', props.user.id);
  console.log('props', props);

  return (
    <div>
      <WishListFollow
        subToFriend={props.subToFriend}
        unSubToFriend={props.unSubToFriend}
        userId={props.user.id}
        friend={props.friend}
        target={props.match.params.id}
      />
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
                    userId={props.user.id}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div>
        {props.isLoggedIn ? (
          <div>
            {props.user.id === Number(props.match.params.id) ? (
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
  friend: state.friend,
});

const mapDispatch = (dispatch) => ({
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
  deleteWishList: (wishListId) =>
    dispatch(removeSingleWishListThunk(wishListId)),
  subToFriend: (friendId, userId) => dispatch(subToFriend(friendId, userId)),
  unSubToFriend: (friendId, userId) =>
    dispatch(unSubToFriend(friendId, userId)),
  fetchFollow: (id) => dispatch(fetchFollow(id)),
});

export default connect(mapState, mapDispatch)(WishListView);
