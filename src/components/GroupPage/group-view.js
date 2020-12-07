import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfile } from '../../store/index';

function GroupView(props) {
  React.useEffect(() => {
      props.fetchProfile(props.user.id)
    return () => {};
  }, []);

  console.log(props.user);

  return (
    <div>
      <div>List of ALL Groups</div>
      <div></div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  fetchProfile: (id) => dispatch(fetchProfile(id)),
});

export default connect(mapState, mapDispatch)(GroupView);
