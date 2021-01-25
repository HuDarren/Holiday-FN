import React from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../../store/item';
import { fetchWishList } from '../../store/wishlist';
import WishItemView from './wishItem-view';
import { removeSingleItemThunk } from '../../store/item';
import { Link } from 'react-router-dom';
import './wishItem-z.css';

function WishItemHome(props) {
  React.useEffect(() => {
    props.fetchWishList(props.match.params.id);
    const target = props.match.params.id;
    props.fetchItem(target);
  }, []);

  const target = props.match.params.id;

  return (
    <div>
      <div className="home-containerT"> Items</div>
      <div className="home-container1">
        <div className="home-container2">
          {props.item.length ? (
            <div className="home-container3">
              {props.item.map((item) => {
                const name = item.name;
                const description = item.description;
                const key = item.id;
                const image = item.Image;
                const wishId = item.wishlistId;
                return (
                  <WishItemView
                    key={key}
                    number={key}
                    name={name}
                    description={description}
                    image={image}
                    deleteItem={props.deleteItem}
                    isLoggedIn={props.isLoggedIn}
                    userId={props.user.id}
                    wishId={wishId}
                    // wishListId={props.wishList[0].userId}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div className="itemHome-button-container">
        <div className="home-button3">
          <div>
            {/* {props.user.id === props.wishList[0].userId ? ( */}
            <button className="home-button1">
              <Link className="home-button2" to={`/itemForm/${target}`}>
                ADD
              </Link>
            </button>
            {/* ) : null} */}
          </div>
        </div>
        <div className="home-button3">
          <div>
            <button className="home-button1">
              <Link className="home-button2" to={`/wishList/${target}/games`}>
                SHOP
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  wishList: state.wishList,
  item: state.item,
  isLoggedIn: !!state.user.id,
});

const mapDispatch = (dispatch) => ({
  fetchItem: (id) => dispatch(fetchItem(id)),
  fetchWishList: (userId) => dispatch(fetchWishList(userId)),
  deleteItem: (itemId) => dispatch(removeSingleItemThunk(itemId)),
});

export default connect(mapState, mapDispatch)(WishItemHome);
