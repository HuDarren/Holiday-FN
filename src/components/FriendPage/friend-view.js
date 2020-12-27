import React from 'react';
import { connect } from 'react-redux';
import { fetchFollow, fetchFollower } from '../../store';
import FriendSearch from './friend-search';
import FriendViewB from './friend-viewB';
import FriendViewC from './friend-viewC';
import './friend-z.css';

function FriendView(props) {
  const [state, setState] = React.useState({
    search: false,
    following: true,
    followers: false,
  });

  React.useEffect(() => {
    props.fetchFollow(props.user.id);
    props.fetchFollower(props.user.id);
  }, []);

  function followingClick() {
    setState({
      search: false,
      following: true,
      follower: false,
    });
  }

  function followerClick() {
    setState({
      search: false,
      following: false,
      follower: true,
    });
  }



  return (
    <div className="friendview-container1">
      <div>
        <div className="friendview-title">Friends</div>
        <FriendSearch />
      </div>
      <div className="friendview-container2">
        <div className="friendview-button2">
          <button className="friendview-button3" onClick={followingClick}>
            <span className="friendview-button4">Following</span>
          </button>
        </div>
        <div className="friendview-button2">
          <button className="friendview-button3" onClick={followerClick}>
            <span className="friendview-button4">Followers</span>
          </button>
        </div>
      </div>
      <div>
        <div className="friendview-container3">
          <div className="friendview-container4">
            {state.following &&
            props.friend.follow &&
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
        </div>
        <div>
          <div>
            {state.follower &&
            props.friend.follower &&
            props.friend.follower.following &&
            props.friend.follower.following.length ? (
              <div>
                {props.friend.follower.following.map((following) => {
                  const name = following.name;
                  const id = following.id;
                  const profileImage = following.profileImage;
                  const email = following.email;
                  return (
                    <FriendViewC
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
        </div>
      </div>
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
