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

      <div
      className="groupview-title"
      >All Events</div>
      <div>
        {props.profile.length ? (
          <div className="groupview-container1">
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
      <div className="groupview-addButton1">
        <button className="groupview-addButton2">
          <Link className="groupview-addButton3" to={`/groupForm`}>
            Add Event
          </Link>
        </button>
      </div>
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
