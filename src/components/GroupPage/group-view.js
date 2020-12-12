import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfile } from '../../store/index';
import GroupViewB from './group-viewB';

function GroupView(props) {
  React.useEffect(() => {
    props.fetchProfile(props.user.id);
    return () => {};
  }, []);

  return (
    <div>
      <div>List of ALL Groups Created </div>
      <div>Groups</div>
      <div>List of ALL Groups Following </div>
      <div>
        {props.profile.length ? (
          <div>
            {props.profile.map((group) => {
              const name = group.name;
              const description = group.description;
              const key = group.id;
              const image = group.groupImg;
              const profileid = group.userId;
              return (
                <GroupViewB
                  key={key}
                  name={name}
                  image={image}
                  description={description}
                  number={key}
                  profileid={profileid}
                  userid={props.user.id}
                />
              );
            })}
          </div>
        ) : null}
      </div>
      <button>
        <Link to={`/groupForm`}>Add Group</Link>
      </button>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  profile: state.profile,
});

const mapDispatch = (dispatch) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id)),
});

export default connect(mapState, mapDispatch)(GroupView);
