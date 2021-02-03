import React from 'react';
import { connect } from 'react-redux';
import WishListViewB from './wishlist-viewB';
import { Link } from 'react-router-dom';
import WishListFollow from './wishlist-follow';
import {
  subToFriend,
  unSubToFriend,
  fetchWishList,
  removeSingleWishListThunk,
  fetchFollow,
  // fetchProfile
} from '../../store';

function WishListView(props) {
  const { id } = props.user;

  React.useEffect(() => {
    props.fetchWishList(props.match.params.id);
    props.fetchFollow(id);
    // props.fetchProfile(props.match.params.id)
  }, [id]);

  console.log(props);

  return (
    <div>
      <WishListFollow
        subToFriend={props.subToFriend}
        unSubToFriend={props.unSubToFriend}
        userId={props.user.id}
        friend={props.friend}
        target={props.match.params.id}
      />
      <div className="wishlist-title">
        {props.friend.follow.name} 's Wishlists
      </div>
      <div className="wishview-container">
        <div className="wishview2-container">
          {props.wishList.length ? (
            <div className="wishview3-container">
              {props.wishList.map((item) => {
                const name = item.name;
                const description = item.description;
                const itemUserId = item.userId;
                const image = item.image;
                const id = item.id;
                return (
                  <WishListViewB
                    name={name}
                    image={image}
                    id={id}
                    description={description}
                    itemUserId={itemUserId}
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
        <div className="wishview-addButton">
          {props.isLoggedIn &&
          props.user.id === Number(props.match.params.id) ? (
            <button className="wishview-addButton2">
              <Link className="wishview-addButton3" to="/wishListForm">
                ADD
              </Link>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.wishList,
  user: state.user,
  isLoggedIn: !!state.user.id,
  friend: state.friend,
  profile: state.profile,
});

const mapDispatch = (dispatch) => ({
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
  deleteWishList: (wishListId) =>
    dispatch(removeSingleWishListThunk(wishListId)),
  subToFriend: (friendId, userId) => dispatch(subToFriend(friendId, userId)),
  unSubToFriend: (friendId, userId) =>
    dispatch(unSubToFriend(friendId, userId)),
  fetchFollow: (id) => dispatch(fetchFollow(id)),
  // fetchProfile: (userId)=>dispatch(fetchProfile(userId))
});

export default connect(mapState, mapDispatch)(WishListView);
