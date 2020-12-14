import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfile, fetchGroup } from '../../store';
import GroupViewB from './group-viewB';
// import GroupViewE from './group-viewE';

function GroupView(props) {
  React.useEffect(() => {
    props.fetchProfile(props.user.id);
    props.fetchGroup(props.user.id);
  }, []);

  return (
    <div>
      {/* <div>List of ALL Groups Created </div>
      <GroupViewE /> */}
      <div>List of ALL Groups </div>
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
  group: state.group,
});

const mapDispatch = (dispatch) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id)),
  fetchGroup: (id) => dispatch(fetchGroup(id)),
});

export default connect(mapState, mapDispatch)(GroupView);
