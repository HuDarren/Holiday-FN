import React from 'react';
import { connect } from 'react-redux';
import { fetchFollow, fetchFollower } from '../../store';
import FriendViewB from './friend-viewdB';

function FriendView(props) {
  React.useEffect(() => {
    props.fetchFollow(props.user.id);
    props.fetchFollower(props.user.id);
  }, []);

  return (
    <div>
      <div>Your Friends</div>
      <div>Following</div>
      <div>
        {props.friend.follow &&
        props.friend.follow.follower &&
        props.friend.follow.follower.length ? (
          <div>
            {props.friend.follow.follower.map((follow) => {
              const name = follow.name;
              const id = follow.id;
              const profileImage = follow.profileImage;
              const email = follow.email;
              return (
                <FriendViewB
                  followName={name}
                  followId={id}
                  followProfileImage={profileImage}
                  followEmail={email}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <div>Followers</div>
      <div>
        {props.friend.follower &&
        props.friend.follower.following &&
        props.friend.follower.following.length ? (
          <div>
            {props.friend.follower.following.map((following) => {
              const name = following.name;
              const id = following.id;
              const profileImage = following.profileImage;
              const email = following.email;
              return (
                <FriendViewB
                  followerName={name}
                  followerId={id}
                  followerProfileImage={profileImage}
                  followerEmail={email}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <div>Search for your friends</div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  friend: state.friend,
});

const mapDispatch = (dispatch) => ({
  fetchFollow: (id) => dispatch(fetchFollow(id)),
  fetchFollower: (id) => dispatch(fetchFollower(id)),
});

export default connect(mapState, mapDispatch)(FriendView);
