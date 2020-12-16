import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUserThunk } from '../../store';

function UserProfileForm(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  React.useEffect(() => {
    setState(props.user);
  }, []);

  // const { updateUser } = props;

  // console.log(props.edit);

  function handleSubmit(event) {
    event.preventDefault();
    const { user } = props;
    props.updateUser(user.id, state);
    props.edit();
    // setState({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form className="profileview-content" onSubmit={handleSubmit}>
        <div>
          {/* <label>Name</label> */}
          <input
            className="groupviewC-name-input"
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
          {/* <label>Email</label> */}
          <input
            className="groupviewC-name-input"
            name="email"
            type="email"
            value={state.email}
            placeholder="Change Email"
            onChange={handleChange}
          ></input>
        </div>
        {/* <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={state.password}
            placeholder="Change Email"
            onChange={handleChange}
          ></input>
        </div> */}
        <div className="profile-button-container">
          <button className="profile-button" type="submit">
            Submit
          </button>
          <button className="profile-button" onClick={props.edit}>
            Cancel
          </button>
        </div>
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
