import React from 'react';
import { connect } from 'react-redux';
import { updateGroupThunk } from '../../store';

function SpinnerHome(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  let selections = '';

  function pair() {
    if (props.groups && props.groups.length > 2) {
      selections = {};
      let pool = [];
      for (let i = 0; i < props.groups.length; i++) {
        pool.push(props.groups[i].id);
      }
      pool.sort(() => Math.random() - 0.5);
      pool.push(pool[0]);
      for (let i = 0; i < pool.length - 1; i++) {
        selections[pool[i]] = pool[i + 1];
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let info = { match: selections };
    pair();
    props.updateGroup(props.groupid, props.userid, info);
    refreshPage();
  }

  return (
    <div>
      {!props.match ? (
        <div className="groupviewC-content2">
          <button className="groupviewC-button" onClick={handleSubmit}>
            <span className="groupviewC-content3">Draw Names</span>
          </button>
        </div>
      ) : (
        <div className="groupviewC-content2">
          <button className="groupviewC-button">
            <span className="groupviewC-content3">Matched</span>
          </button>
        </div>
      )}
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

export default connect(mapState, mapDispatch)(SpinnerHome);
