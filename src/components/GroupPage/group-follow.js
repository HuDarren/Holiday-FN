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

  function displayButton(member, user) {
    let result = false;

    if (member.users && member.users.length) {
      for (let i = 0; i < member.users.length; i++) {
        if (member.users[i].id === user) {
          console.log('props result', member.users[i].id);
          result = true;
          break;
        }
      }
    }
    console.log('result', result);
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
    </div>
  );
}

export default GroupFollow;
