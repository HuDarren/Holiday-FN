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
    props.updateItem(target[2], target[3], state);
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
    <div className="itemform-container">
      <div className="itemform-content">Edit Item</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="itemform-input"
            name="name"
            type="text"
            value={state.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="itemform-input"
            name="description"
            type="text"
            value={state.description}
            onChange={handleChange}
          ></input>
        </div>
        <button className="itemform-submit" type="submit">
          Submit
        </button>
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
