import React from 'react';

function GroupFollow(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  function Click1() {
    props.subToGroup(props.group.id, props.userId);
    refreshPage();
  }

  function Click2() {
    props.unSubToGroup(props.group.id, props.userId);
    refreshPage();
  }

  function displayButton(group, user) {
    let result = false;
    let owner = false;

    if (group.userId === user) {
      owner = true;
    }

    if (group.users && group.users.length) {
      for (let i = 0; i < group.users.length; i++) {
        if (group.users[i].id === user) {
          console.log('props result', group.users[i].id);
          result = true;
          break;
        }
      }
    }
    console.log('result', result);

    if (owner) {
      return (
        <div className="groupviewC-content2">
          <button className="groupviewC-button">
            <span className="groupviewC-content3">I am owner</span>
          </button>
        </div>
      );
    }

    if (!result) {
      return (
        <div className="groupviewC-content2">
          <button className="groupviewC-button" onClick={() => Click1()}>
            <span className="groupviewC-content3">Love to Join</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="groupviewC-content2">
          <button className="groupviewC-button" onClick={() => Click2()}>
            <span className="groupviewC-content3">Change my Mind</span>
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <div>{displayButton(props.group, props.userId)}</div>
      <div></div>
    </div>
  );
}

export default GroupFollow;
