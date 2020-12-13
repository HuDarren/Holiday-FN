import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../../store/index';
import { Link } from 'react-router-dom';
import './friend-z.css';

function FriendSearch(props) {
  const [state, setstate] = React.useState({
    search: '',
    showResult: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.fetchSearch(state.search);
    setstate({
      search: '',
      showResult: true,
    });
  }

  function handleChange(event) {
    setstate({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <div className="friend-container1">
        <form className="search-container">
          <input
            className="search-form"
            name="search"
            type="text"
            value={state.search}
            onChange={handleChange}
            placeholder="Search for Friends"
          ></input>
          <button
            className="search-button"
            type="submit"
            onClick={handleSubmit}
          >
            <span className="search-button2"> Search</span>
          </button>
        </form>
      </div>
      <div>
        <div>
          {props.friend && props.friend.search.length ? (
            <div>
              {props.friend.search.map((friend) => {
                return (
                  <Link to={`/wishListView/${friend.id}`}>
                    <div>{friend.name}</div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div>
              {state.showResult ? <div>No Result </div> : <div>Pending </div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  friend: state.friend,
});

const mapDispatch = (dispatch) => ({
  fetchSearch: (id) => dispatch(fetchSearch(id)),
});

export default connect(mapState, mapDispatch)(FriendSearch);
