import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUserThunk } from '../../store';

function UserProfileForm(props) {
  const [state, setState] = useState({
    name: '',
    email: '',
  });

  // const [imagex, setImage] = React.useState('');

  React.useEffect(() => {
    setState(props.user);
  }, []);


  function handleSubmit(event) {
    event.preventDefault();
    const { user } = props;
    // let info = {...state, profileImage: imagex}
    props.updateUser(user.id, state);
    props.edit();
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  //   async function uploadImage(e) {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append('file', files[0]);
  //   data.append('upload_preset', 'uploadx');
  

  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/dsi0jbonx/image/upload',
  //     {
  //       method: 'Post',
  //       body: data,
  //     }
  //   );

  //   const file = await res.json();
  //   setImage(file.secure_url);

  // }

  return (
    <div>
       <div className="userview-container2">
          <img
            className="userview-image"
            alt="text"
            src={props.user.profileImage}
          ></img>
        </div>
      <form className="profileview-content" onSubmit={handleSubmit}>
        {/* <div>
          <input
         className="groupviewC-name-input"
         name="image"
         type="file"
         onChange={uploadImage}
          ></input>
        </div> */}
        <div>
          {/* <label>Name</label> */}
          <input
            className="groupviewC-name-input"
            name="name"
            type="text"
            value={state.name}
            placeholder="Change name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
            className="groupviewC-name-input"
            name="email"
            type="email"
            value={state.email}
            placeholder="Change Email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="profile-button-container">
          <button className="profile-button" type="submit">
            Submit
          </button>
          <button className="profile-button" onClick={props.edit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  updateUser: (userId, info) => dispatch(updateUserThunk(userId, info)),
});

export default connect(mapState, mapDispatch)(UserProfileForm);
