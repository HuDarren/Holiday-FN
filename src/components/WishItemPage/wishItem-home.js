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
    const target = props.history.location.pathname.split('/')[
      props.history.location.pathname.split('/').length - 1
    ];
    props.fetchItem(target);
  }, []);

  const target = props.history.location.pathname.split('/')[
    props.history.location.pathname.split('/').length - 1
  ];

  console.log(props.wishList.userId);

  return (
    <div>
      <div className="home-containerT"> Your Items</div>
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
                    wishListId={props.wishList[0].userId}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      <div className="home-button3">
        {props.isLoggedIn && props.wishList.length ? (
          <div>
            {props.user.id === props.wishList[0].userId ? (
              <button className="home-button1">
                <Link className="home-button2" to={`/itemForm/${target}`}>
                  ADD
                </Link>
              </button>
            ) : null}
          </div>
        ) : null}
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
