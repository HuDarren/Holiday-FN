import React from "react";
import { connect } from "react-redux";
import { addWishListThunk } from "../../store/wishlist";
// import {useHistory} from "react-router-dom"
import history from "../../history"

function WishListForm(props) {
  const [state, setState] = React.useState({
    name: "",
    description: "",
  });

   const [imagex, setImage] = React.useState('');


  function handleSubmit(event) {
    event.preventDefault();
      let info = { ...state,  image: imagex};
    props.addWishList(props.user.id, info);
    setState({
      name: "",
      description: "",
      image:""
    });
    history.push(`/wishListView/${props.user.id}`)
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

    <div 
    className="wishlist-form-container"
    >
 
      <div 
      className="wishlist-form-contentA"
      >
           <div
           className="wishlist-title"
           
           >Add New WishList</div>
      <form
      className="wishlist-form-content"  onSubmit={handleSubmit}>
      <div>
        <label className="wishlist-form-label">Import Photo</label>
        <input
          className="wishlist-form-input"
          name="image"
          type="file"
          onChange={uploadImage}
        ></input>
      </div>
        <div>
          <label className="wishlist-form-label">Title</label>
          <input
           className="wishlist-form-input"
            name="name"
            type="text"
            value={state.name}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className="wishlist-form-label">Description</label>
          <textarea
           className="wishlist-form-textarea"
            name="description"
            type="text"
            value={state.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button 
        className="wishlist-form-button"
        type="submit">ADD</button>
      </form>
      </div>
    </div>


  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  addWishList: (userId, info) => dispatch(addWishListThunk(userId, info)),
});

export default connect(mapState, mapDispatch)(WishListForm);
