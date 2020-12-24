import React from 'react';
import { connect } from 'react-redux';
import { addGroupThunk } from '../../store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function GroupFormA(props) {
  const [state, setState] = React.useState({
    name: '',
    description: '',
  });

    const [startDate, setStartDate] = React.useState(new Date());
    const [image, setImage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
       let info = { ...state, exchangeDate: startDate , groupImg: image};
    props.addGroup(props.user.id, info);
    setState({
      name: '',
      description: '',
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
    <div>
      <div
      className="groupview-title"
      >Create new Group</div>
          <form className="groupviewC-content" onSubmit={handleSubmit}>
      <div>
        <label className="groupviewC-label">Import Photo</label>
        <input
          className="groupviewC-name-input"
          name="image"
          type="file"
          onChange={uploadImage}
        ></input>
      </div>
      <div>
        <label className="groupviewC-label">Title</label>
        <input
          className="groupviewC-name-input"
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label className="groupviewC-label">Budget</label>
        <input
          className="groupviewC-detail-input"
          name="budget"
          type="text"
          value={state.budget}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label className="groupviewC-label">Description</label>
        <textarea
          className="groupviewC-detail-textarea"
          name="description"
          type="text"
          value={state.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <label className="groupviewC-label">Time</label>
      <DatePicker
        className="groupviewC-detail-input"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
      />
      <div className="groupviewC-viewForm-button1">
        <button className="groupviewC-viewForm-button2" type="submit">
          Edit
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
  addGroup: (id, info) => dispatch(addGroupThunk(id, info)),
});

export default connect(mapState, mapDispatch)(GroupFormA);
