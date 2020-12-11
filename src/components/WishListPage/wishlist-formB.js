import React from 'react';
import { connect } from 'react-redux';
import { updateWishListThunk } from '../../store';

function WishListFormB(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.updateWishList(props.user.id, props.match.params.id, state);
    setState({
      name: '',
      description: '',
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  console.log('look', props);

  return (
    <div>
      <div>update form </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={state.description}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  updateWishList: (userid, wishid, info) =>
    dispatch(updateWishListThunk(userid, wishid, info)),
});

export default connect(mapState, mapDispatch)(WishListFormB);
