import React from "react";
import { connect } from "react-redux";
import { addWishListThunk } from "../../store/wishlist";

function WishListForm(props) {
  const [state, setState] = React.useState({
    name: "",
    description: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.addWishList(props.user.id, state);
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
      <div>Add New WishList</div>

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
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  addWishList: (userId, info) => dispatch(addWishListThunk(userId, info)),
});

export default connect(mapState, mapDispatch)(WishListForm);
