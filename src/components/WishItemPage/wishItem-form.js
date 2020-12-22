import React from 'react';
import { connect } from 'react-redux';
import { addItemThunk } from '../../store/item';

function WishItemForm(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

    const [imagex, setImage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
      let info = { ...state,  Image: imagex};
    const target = props.history.location.pathname.split('/')[
      props.history.location.pathname.split('/').length - 1
    ];
    props.addItem(target, info);
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
      console.log(imagex)
  }

console.log(imagex)

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
  item: state.item,
});

const mapDispatch = (dispatch) => ({
  addItem: (wishListId, info) => dispatch(addItemThunk(wishListId, info)),
});

export default connect(mapState, mapDispatch)(WishItemForm);
