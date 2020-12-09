import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from '../../store/index';
import GroupViewD from './group-viewD';

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
});

const mapDispatch = (dispatch) => ({
  fetchGroup: (id) => dispatch(fetchGroup(id)),
});

export default connect(mapState, mapDispatch)(GroupViewC);
