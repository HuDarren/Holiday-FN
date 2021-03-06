import React from 'react';
import GameKey from '../../secrets';
import GShopSearchA from './gshop-searchA';
import GShopSearchB from './gshop-searchB';
import GShopSearchC from './gshop-searchC';
import './gshop-z.css';

function GShopSearch(props) {
  const [state, setState] = React.useState({
    search: '',
    info: '',
  });

  async function getGame() {
    let response = await fetch(
      `https://api.boardgameatlas.com/api/search?name=${state.search}&client_id=${GameKey}&limit=10`
    );
    let data = await response.json();
    setState({
      info: data,
      search: '',
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getGame();
  }

  return (
    <div>
      <div className="gshop-container">
        <div className="gshop-title">Add To WishList</div>
        <div className="gshop-searchbar">
          <form className="gshop-form" onSubmit={handleSubmit}>
            <input
              className="gshop-form-input"
              name="search"
              type="text"
              value={state.search}
              onChange={handleChange}
              placeholder=""
            ></input>
            <button className="gshop-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="gshopA-content-container1">
        {state.info ? (
          <div className="gshopA-content-container2">
            {state.info.games.map((item) => {
              return (
                <GShopSearchA
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.images.medium}
                  rulesUrl={item.rulesUrl}
                  officialUrl={item.official_url}
                  wishListId={props.wishListId}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <GShopSearchB wishListId={props.wishListId} />
            <GShopSearchC wishListId={props.wishListId} />
          </div>
        )}
      </div>
    </div>
  );
}

export default GShopSearch;
