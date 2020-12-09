import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup, unSubToGroup, subToGroup } from '../../store/index';
import GroupViewD from './group-viewD';
import GroupFollow from './group-follow';

function GroupViewC(props) {
  React.useEffect(() => {
    const target = props.history.location.pathname.split('/')[
      props.history.location.pathname.split('/').length - 1
    ];
    props.fetchGroup(target);
  }, []);

  return (
    <div>
      <div>Groups</div>
      <GroupFollow
        unSubToGroup={props.unSubToGroup}
        subToGroup={props.subToGroup}
        group={props.group}
        userId={props.user.id}
      />
      <div>{props.group.name}</div>
      <div>{props.group.description}</div>
      <div>
        {props.group && props.group.users && props.group.users.length ? (
          <div>
            {props.group.users.map((user) => {
              const name = user.name;
              const email = user.email;
              const image = user.profileImage;
              const key = user.id;
              return (
                <GroupViewD
                  number={key}
                  name={name}
                  image={image}
                  email={email}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  group: state.group,
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchGroup: (id) => dispatch(fetchGroup(id)),
  subToGroup: (groupId, userId) => dispatch(subToGroup(groupId, userId)),
  unSubToGroup: (groupId, userId) => dispatch(unSubToGroup(groupId, userId)),
});

export default connect(mapState, mapDispatch)(GroupViewC);
