import React from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../../store/index';

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
      <div></div>
      <form>
        <label>Search</label>
        <input
          name="search"
          type="text"
          value={state.search}
          onChange={handleChange}
        ></input>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      <div>
        <div>
          {props.friend && props.friend.search.length ? (
            <div>
              {props.friend.search.map((friend) => {
                return <div>{friend.name}</div>;
              })}
            </div>
          ) : (
            <div>
              {state.showResult ? <div>No Result </div> : <div>Pending </div>}
            </div>
          )}
        </div>
      </div>
      <div>testing</div>
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
