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
import SpinnerHome from '../SpinnerPage/spinner-home';
import SpinnerView from '../SpinnerPage/spinner-view';

function GroupViewC(props) {
  const [state, setState] = React.useState({
    showForm: true,
  });

  const [select, setSelect] = React.useState({
    participants: true,
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

  function view1() {
    setSelect({
      participants: true,
    });
  }

  function view2() {
    setSelect({
      participants: false,
    });
  }

  function Owner() {
    const groups = props.group.GroupFollow;
    let result = '';
    if (groups && groups.length) {
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].id === props.group.userId) {
          result = groups[i].name;
        }
      }
    }
    return result;
  }

  return (
    <div>
      <div>Groups</div>
      {/* Group Information  */}
      <div className="groupviewC-container3">
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

            {/* Button to draw the names and generate pair */}

            <SpinnerHome
              groups={props.group.GroupFollow}
              groupid={props.group.id}
              userid={props.user.id}
              match={props.group.match}
            />

            {/* Buttons to edit and delete  */}
            <div className="groupviewC-content2">
              <button className="groupviewC-button" onClick={edit}>
                <span className="groupviewC-content3">Edit</span>
              </button>
              <button
                className="groupviewC-button"
                onClick={() => props.removeGroup(props.group.id)}
              >
                <span className="groupviewC-content3">Delete</span>
              </button>
            </div>
          </div>
          {state.showForm ? (
            <div className="groupviewC-content">
              <div className="groupviewC-name">{props.group.name}</div>
              <div className="groupviewC-content4">
                <div className="groupviewC-content5">
                  <div>Exchange Date </div>
                  <div>{props.group.exchangeDate}</div>
                </div>
                <div className="groupviewC-content5">
                  <div>Budget</div>
                  <div>${props.group.budget}</div>
                </div>
              </div>

              <div className="groupviewC-detail">{props.group.description}</div>
              <div>
                <div>Organizer</div>
                <div>{Owner()}</div>
              </div>
            </div>
          ) : (
            <GroupFormB group={props.group} />
          )}
        </div>
      </div>

      {/* User Joined Component, List of all the users who joined the group  */}
      <div>
        <div className="friendview-container2">
          <div className="friendview-button2">
            <button className="friendview-button3" onClick={view1}>
              <div className="friendview-button4">Participants</div>
            </button>
          </div>
          <div className="friendview-button2">
            <button className="friendview-button3" onClick={view2}>
              <div className="friendview-button4">Your Match</div>
            </button>
          </div>
        </div>
        <div>
          {select.participants ? (
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
          ) : (
            <div>
              <SpinnerView
                match={props.group.match}
                group={props.group}
                userId={props.user.id}
              />
            </div>
          )}
        </div>
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
