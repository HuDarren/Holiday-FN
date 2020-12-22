import React from 'react';
import { connect } from 'react-redux';
import { updateItemThunk } from '../../store';

function WishItemFormB(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

    const [imagex, setImage] = React.useState('');

  const target = props.match.url.split('/');

  function handleSubmit(event) {
    event.preventDefault();
    let info = { ...state,  Image: imagex};
    props.updateItem(target[2], target[3], info);
    setState({
      name: '',
      description: '',
      Image: ""
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }


    async function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'uploadx');
  

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dsi0jbonx/image/upload',
      {
        method: 'Post',
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);

  }



  return (
    <div className="itemform-container">
      <div className="itemform-contentA">
      <form
      className="itemform-content"
      onSubmit={handleSubmit}>
      <div>
        <label className="itemform-label">Import Photo</label>
        <input
          className="itemform-input"
          name="image"
          type="file"
          onChange={uploadImage}
        ></input>
      </div>
        <div>
                 <label className="itemform-label">Title</label>
          <input
            className="itemform-input"
            name="name"
            type="text"
            value={state.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
                 <label className="itemform-label">Description</label>
          <textarea
            className="itemform-textarea"
            name="description"
            type="text"
            value={state.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="itemform-button" type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  updateItem: (wishid, itemid, info) =>
    dispatch(updateItemThunk(wishid, itemid, info)),
});

export default connect(mapState, mapDispatch)(WishItemFormB);
