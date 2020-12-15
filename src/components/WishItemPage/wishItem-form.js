import React from 'react';
import { connect } from 'react-redux';
import { addItemThunk } from '../../store/item';

function WishItemForm(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    const target = props.history.location.pathname.split('/')[
      props.history.location.pathname.split('/').length - 1
    ];
    props.addItem(target, state);
    setState({
      name: '',
      description: '',
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div className="itemform-container">
      <div className="itemform-content">Add New Item </div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label>Title</label> */}
          <input
            className="itemform-input"
            name="name"
            type="text"
            placeholder="Item"
            value={state.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          {/* <label>Description</label> */}
          <input
            className="itemform-input"
            name="description"
            value={state.description}
            type="text"
            placeholder="Description"
            onChange={handleChange}
          ></input>
        </div>
        <button 
        className="itemform-submit"
        type="submit">ADD</button>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  item: state.item,
});

const mapDispatch = (dispatch) => ({
  addItem: (wishListId, info) => dispatch(addItemThunk(wishListId, info)),
});

export default connect(mapState, mapDispatch)(WishItemForm);
