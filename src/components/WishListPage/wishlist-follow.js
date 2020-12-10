import React from 'react';

function WishListFollow(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  console.log(props.target);

  function Click1() {
    props.subToFriend(props.userId, props.target);
    refreshPage();
  }

  function Click2() {
    props.unSubToFriend(props.userId, props.target);
    refreshPage();
  }

  function displayButton(follower, user, target) {
    let result = 'notFollowing';

    if (
      follower.follow &&
      follower.follow.follower &&
      follower.follow.follower.length
    ) {
      for (let i = 0; i < follower.follow.follower.length; i++) {
        if (follower.follow.follower[i].id === target) {
          //   console.log('props result', follower.follow.follower[i].id);
          result = 'Following';
          break;
        }
      }
    }
    if (target === user) {
      result = 'ownUser';
    }
    console.log('result', result);
    if (result === 'notFollowing') {
      return (
        <div>
          <button onClick={() => Click1()}>Follow</button>
        </div>
      );
    } else if (result === 'Following') {
      return (
        <div>
          <button onClick={() => Click2()}>Unfollow</button>
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        {displayButton(props.friend, props.userId, Number(props.target))}
      </div>
    </div>
  );
}

export default WishListFollow;
