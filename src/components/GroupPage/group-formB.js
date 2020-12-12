import React from 'react';
import { connect } from 'react-redux';
import { updateGroupThunk } from '../../store';

function GroupFormB(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  function refreshPage() {
    window.location.reload(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.updateGroup(props.group.id, props.user.id, state);
    setState({
      name: '',
      description: '',
    });
    refreshPage();
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
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  updateGroup: (groupId, userId, info) =>
    dispatch(updateGroupThunk(groupId, userId, info)),
});

export default connect(mapState, mapDispatch)(GroupFormB);
