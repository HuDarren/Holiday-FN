import React from 'react';
import { connect } from 'react-redux';
import { updateItemThunk } from '../../store';

function WishItemFormB(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  const target = props.match.url.split('/');

  function handleSubmit(event) {
    event.preventDefault();
    props.updateItem(1, 2, state);
    setState({
      name: '',
      description: '',
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  console.log(props);

  return (
    <div>
      <div>WishItemFormB</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
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
  updateItem: (wishid, itemid, info) =>
    dispatch(updateItemThunk(wishid, itemid, info)),
});

export default connect(mapState, mapDispatch)(WishItemFormB);
