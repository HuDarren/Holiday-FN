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
        <div>
          <button>I am owner</button>
        </div>
      );
    }

    if (!result) {
      return (
        <div>
          <button onClick={() => Click1()}>Love to Join</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => Click2()}>Change My Mind</button>
        </div>
      );
    }
  }

  return (
    <div>
      <div>follow this group</div>
      <div>{displayButton(props.group, props.userId)}</div>
      <div></div>
    </div>
  );
}

export default GroupFollow;
