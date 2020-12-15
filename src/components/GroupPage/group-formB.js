import React from 'react';
import { connect } from 'react-redux';
import { updateGroupThunk } from '../../store';

function GroupFormB(props) {
  const name = props.group.name;
  console.log(name);

  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

  React.useEffect(() => {
    setState(props.group);
  }, [props.group]);

  function refreshPage() {
    window.location.reload(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.updateGroup(props.group.id, props.user.id, state);

    refreshPage();
  }

  // console.log(state.name);
  // console.log(props);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <form className="groupviewC-content" onSubmit={handleSubmit}>
      <div>
        {/* <label>Title</label> */}
        <input
          className="groupviewC-name-input"
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <input
          className="groupviewC-detail-input"
          name="description"
          type="text"
          value={state.description}
          onChange={handleChange}
        ></input>

        {/* <label>Description</label> */}
      </div>
      <button type="submit">Edit</button>
    </form>
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
