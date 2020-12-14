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

  console.log(
    props.friend.search.length
      ? props.friend.search[0].name.toLowerCase()
      : null
  );

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
                  <div className="friendviewb-container1">
                    <div className="friendviewb-container2">
                      <button className="friendviewb-button1">
                        <Link
                          className="friendviewb-link"
                          to={`/wishListView/${friend.id}`}
                        >
                          <div className="friendviewb-content">
                            {friend.name[0]}
                          </div>
                        </Link>
                      </button>
                    </div>
                    <div className="friendviewb-container3">
                      <button className="friendviewb-button2">
                        <Link
                          className="friendviewb-link"
                          to={`/wishListView/${friend.id}`}
                        >
                          <div className="friendviewb-content2">
                            {friend.name}
                          </div>
                        </Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              {
                state.showResult ? (
                  <div className="friendsearch-content">No Result </div>
                ) : null
                // <div className="friendsearch-content">Connect with Friends</div>
              }
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
