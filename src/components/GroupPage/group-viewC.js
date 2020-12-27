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

  const [select, setSelect] = React.useState({
    participants: true,
    draw: false,
    form: false,
  });

  React.useEffect(() => {
    const target = props.history.location.pathname.split('/')[
      props.history.location.pathname.split('/').length - 1
    ];
    props.fetchGroup(target);
  }, []);



  function viewP() {
    setSelect({
      participants: true,
      draw: false,
      form: false,
    });
  }

  function viewD() {
    setSelect({
      participants: false,
      draw: true,
      form: false,
    });
  }
  function viewF() {
    setSelect({
      participants: false,
      draw: false,
      form: true,
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

      <div className="groupviewC-container3">
        <div className="groupviewC-container4">
          <div className="groupviewC-name-container">
            <div className="groupviewC-name">{props.group.name}</div>
          </div>
          <div className="groupviewC-image-container">
            <img
              className="groupviewC-image"
              alt="img"
              src={props.group.groupImg}
            ></img>
          </div>
          <div className="groupviewC-content-container">
            <div className="groupviewC-date-budget1">
              <div className="groupviewC-date-budget2">Exchange On </div>
              <div className="groupviewC-date-budget3">
                {String(props.group.exchangeDate).slice(0,10)}
              </div>
            </div>

            <div className="groupviewC-date-budget1">
              <div className="groupviewC-date-budget2">Budget</div>
              <div className="groupviewC-date-budget3">
                ${props.group.budget}
              </div>
            </div>
          </div>
          <div className="groupviewC-org-container">
            <div className="groupviewC-org1">
              <span className="groupviewC-org2">Organizer</span>
            </div>
            <div className="groupviewC-org1">
              <div className="groupviewC-org3">{Owner()}</div>
            </div>
            <div></div>
          </div>
          <div className="groupviewC-detail-container">
            <div className="groupviewC-detail2">{props.group.description}</div>
          </div>
        </div>
      </div>

      {/* All buttons , participants, update and match  */}
      <div>
        <div className="friendview-container2">
          <div className="friendview-button2">
            <button className="friendview-button3" onClick={viewP}>
              <div className="friendview-button4">Participants</div>
            </button>
          </div>
          <div className="friendview-button2">
            <button className="friendview-button3" onClick={viewD}>
              <div className="friendview-button4">Your Match</div>
            </button>
          </div>
          <div className="friendview-button2">
            <button className="friendview-button3" onClick={viewF}>
              <div className="friendview-button4">Update</div>
            </button>
          </div>
        </div>
        <div>
          <div>
            {select.participants ? (
              <div>
                <div>
                  <GroupFollow
                    unSubToGroup={props.unSubToGroup}
                    subToGroup={props.subToGroup}
                    group={props.group}
                    userId={props.user.id}
                  />
                </div>
                {props.group &&
                props.group.GroupFollow &&
                props.group.GroupFollow.length ? (
                  <div className="groupviewC-viewD-container">
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
            ) : null}
          </div>
          <div>
            {select.draw ? (
              <div>
                <div>
                  <SpinnerHome
                    groups={props.group.GroupFollow}
                    groupid={props.group.id}
                    userid={props.user.id}
                    match={props.group.match}
                  />
                  <SpinnerView
                    match={props.group.match}
                    group={props.group}
                    userId={props.user.id}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div>
            {select.form ? (
              <div>
                {/* Buttons to edit and delete  */}
                <div className="groupviewC-content2">
                  {/* <button className="groupviewC-button" onClick={edit}>
                    <span className="groupviewC-content3">Edit</span>
                  </button> */}
                  <button
                    className="groupviewC-button"
                    onClick={() => props.removeGroup(props.group.id)}
                  >
                    <span className="groupviewC-content3">Delete</span>
                  </button>
                </div>
                <div className="groupviewC-viewForm-container">
                  <GroupFormB group={props.group} />
                </div>
              </div>
            ) : null}
          </div>
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
