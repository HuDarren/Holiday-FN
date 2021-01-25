import React from 'react';
import { connect } from 'react-redux';
import GameKey from '../../secrets';
import { addItemThunk } from '../../store';
import './gshop-searchC.css';

function GShopSearchC(props) {
  const [state, setState] = React.useState({
    data: '',
  });

  React.useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await fetch(
      `https://api.boardgameatlas.com/api/search?client_id=${GameKey}&order_by=year_publisher&limit=8`
    );
    let data = await response.json();
    setState({
      data: data,
    });
  }

  console.log(state);

  return (
    <div className="gshopC-container">
      <div className="gshopC-title">
        <div className="gshopC-titleB">New Releases</div>
      </div>

      <div className="gshopC-content-container1">
        {state.data ? (
          <div className="gshopC-content-container2">
            {state.data.games.map((item) => {
              return (
                <div className="gshopC-content-container3">
                  <div className="gshopC-content-container4">
                    <div className="gshopC-image-container">
                      <img
                        alt="img"
                        className="gshopC-image"
                        src={item.images.medium}
                      ></img>
                    </div>
                    <div className="gshopC-text-container">
                      <div className="gshopC-text">{item.name}</div>
                    </div>
                    <div className="gshopC-text-container">
                      <div className="gshopC-text">${item.price}</div>
                    </div>
                    <div className="gshopC-button-container">
                      <div className="gshopC-button-containerA">
                        <button
                          className="gshopC-button"
                          onClick={function () {
                            let info = {
                              name: item.name,
                              Image: item.images.medium,
                            };
                            props.addItem(props.wishListId, info);
                          }}
                        >
                          <span className="gshopC-button-text">Wish</span>
                        </button>
                      </div>
                      <div className="gshopC-button-containerA">
                        <button
                          className="gshopC-button"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = item.official_url;
                          }}
                        >
                          {' '}
                          <span className="gshopC-button-text">View</span>
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

export default connect(mapState, mapDispatch)(GShopSearchC);
