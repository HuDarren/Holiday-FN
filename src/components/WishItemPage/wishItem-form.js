import React from "react";
import { connect } from "react-redux";
import { addItemThunk } from "../../store/item";

function WishItemForm(props) {
  const [state, setState] = React.useState({
    name: "",
    description: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const target = props.history.location.pathname.split("/")[
      props.history.location.pathname.split("/").length - 1
    ];
    props.addItem(target, state);
    setState({
      name: "",
      description: "",
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <div>Add New Item </div>
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
            value={state.description}
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">ADD</button>
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
