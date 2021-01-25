import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserProfileForm from './user-profileForm';

function UserView(props) {
  const [state, setState] = useState({
    showForm: true,
  });

  function edit() {
    setState({
      showForm: !state.showForm,
    });
  }

  return (
    <div className="userview-container1">
      <div>
        {state.showForm ? (
          <div className="userview-content">
          <div className="userview-container2">
          <img
            className="userview-image"
            alt="text"
            src={props.user.profileImage}
          ></img>
        </div>
            <div className="userview-name">{props.user.name}</div>
            <div className="userview-email">{props.user.email}</div>
            <button className="userview-button">
              <span className="userview-edit" onClick={edit}>
                Edit
              </span>
            </button>
          </div>
        ) : (
          <UserProfileForm edit={edit} />
        )}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

export default connect(mapState)(UserView);
