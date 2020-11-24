import React, { useState } from "react";

function UserProfileForm() {
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    setState({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  }

  function handleChange(event) {
    setState(event.target.value);
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
        <div>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={state.username}
            placeholder="Change Username"
            onChange={handleChange}
          ></input>
        </div>
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

export default UserProfileForm;
