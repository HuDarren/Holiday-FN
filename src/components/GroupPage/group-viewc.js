import React from 'react';
import { connect } from 'react-redux';
import {
  fetchGroup,
  unSubToGroup,
  subToGroup,
  removeGroupThunk,
} from '../../store/index';
import GroupViewD from './group-viewD';
import GroupFollow from './group-follow';
import GroupFormB from './group-formB';

function GroupViewC(props) {
  const [state, setState] = React.useState({
    showForm: true,
  });

  React.useEffect(() => {
    const target = props.history.location.pathname.split('/')[
      props.history.location.pathname.split('/').length - 1
    ];
    props.fetchGroup(target);
  }, []);

  function edit() {
    setState({
      showForm: !state.showForm,
    });
  }

  console.log('state', state.showForm);

  return (
    <div>
      <div>Groups</div>
      {/* Group Information  */}
      <div>
        <div className="groupviewC-container1">
          <div className="groupviewC-container2">
            <img
              className="groupviewC-image"
              alt="img"
              src={props.group.groupImg}
            ></img>

            {/* Follow component, Button to Join the group or unJoin or if you are the creator of the group  */}

            <GroupFollow
              unSubToGroup={props.unSubToGroup}
              subToGroup={props.subToGroup}
              group={props.group}
              userId={props.user.id}
            />

            {/* Buttons to edit and delete  */}
            <div>
              <button onClick={edit}>Edit</button>
              <button onClick={() => props.removeGroup(props.group.id)}>
                Delete
              </button>
            </div>
          </div>
          {state.showForm ? (
            <div className="groupviewC-content">
              <div className="groupviewC-name">{props.group.name}</div>
              <div className="groupviewC-detail">{props.group.description}</div>
            </div>
          ) : (
            <GroupFormB group={props.group} />
          )}
        </div>
      </div>

      {/* Form component , to edit if you are the owner  */}

      {/* User Joined Component, List of all the users who joined the group  */}
      <div>
        {props.group &&
        props.group.GroupFollow &&
        props.group.GroupFollow.length ? (
          <div>
            {props.group.GroupFollow.map((user) => {
              const name = user.name;
              const email = user.email;
              const image = user.profileImage;
              const key = user.id;
              return (
                <GroupViewD
                  number={key}
                  name={name}
                  image={image}
                  email={email}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  group: state.group,
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchGroup: (id) => dispatch(fetchGroup(id)),
  subToGroup: (groupId, userId) => dispatch(subToGroup(groupId, userId)),
  unSubToGroup: (groupId, userId) => dispatch(unSubToGroup(groupId, userId)),
  removeGroup: (groupId) => dispatch(removeGroupThunk(groupId)),
});

export default connect(mapState, mapDispatch)(GroupViewC);
