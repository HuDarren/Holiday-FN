import React from 'react';
import { connect } from 'react-redux';
import GameKey from '../../secrets';
import { addItemThunk } from '../../store';
import './gshop-searchB.css';

function GShopSearchB(props) {
  const [state, setState] = React.useState({
    data: '',
  });

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetch(
      `https://api.boardgameatlas.com/api/search?client_id=${GameKey}&order_by=popularity&limit=5`
    );
    let info = await response.json();
    setState({
      data: info,
    });
  }

  return (
    <div className="gshopB-container">
      <div className="gshopB-title">
        <div className="gshopB-titleB">Popular Games</div>
      </div>

      <div className="gshopB-content-container1">
        {state.data ? (
          <div className="gshopB-content-container2">
            {state.data.games.map((item) => {
              return (
                <div className="gshopB-content-container3">
                  <div className="gshopB-content-container4">
                    <div className="gshopB-image-container">
                      <img
                        alt="img"
                        className="gshopB-image"
                        src={item.images.medium}
                      ></img>
                    </div>
                    <div className="gshopB-text-container">
                      <div className="gshopB-text">{item.name}</div>
                    </div>
                    <div className="gshopB-text-container">
                      <div className="gshopB-text">${item.price}</div>
                    </div>
                    <div className="gshopB-button-container">
                      <div className="gshopB-button-containerA">
                        <button
                          className="gshopB-button"
                          onClick={function () {
                            let info = {
                              name: item.name,
                              Image: item.images.medium,
                            };
                            props.addItem(props.wishListId, info);
                          }}
                        >
                          <span className="gshopB-button-text">Wish</span>
                        </button>
                      </div>
                      <div className="gshopB-button-containerA">
                        <button
                          className="gshopB-button"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = item.official_url;
                          }}
                        >
                          {' '}
                          <span className="gshopB-button-text">View</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  addItem: (wishListId, info) => dispatch(addItemThunk(wishListId, info)),
});

export default connect(mapState, mapDispatch)(GShopSearchB);
