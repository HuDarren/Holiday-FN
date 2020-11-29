import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUserThunk } from "../../store";

function UserProfileForm(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { updateUser } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { user } = props;
    updateUser(user.id, state);
    setState({
      name: "",
      email: "",
      password: "",
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={state.name}
            placeholder="Change name"
            onChange={handleChange}
          ></input>
        </div>
        {/* <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={state.username}
            placeholder="Change Username"
            onChange={handleChange}
          ></input>
        </div> */}
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={state.email}
            placeholder="Change Email"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={state.password}
            placeholder="Change Email"
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
  updateUser: (userId, info) => dispatch(updateUserThunk(userId, info)),
});

export default connect(mapState, mapDispatch)(UserProfileForm);
