import React from 'react';
import { connect } from 'react-redux';
import { addGroupThunk } from '../../store';

function GroupFormA(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.addGroup(props.user.id, state);
    setState({
      name: '',
      description: '',
    });
  }

  console.log(props);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <div>Create new Group</div>
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  addGroup: (id, info) => dispatch(addGroupThunk(id, info)),
});

export default connect(mapState, mapDispatch)(GroupFormA);
