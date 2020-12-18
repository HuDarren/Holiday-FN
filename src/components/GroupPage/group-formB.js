import React from 'react';
import { connect } from 'react-redux';
import { updateGroupThunk } from '../../store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function GroupFormB(props) {
  const name = props.group.name;
  console.log(name);

  const [state, setState] = React.useState({
    name: '',
    description: '',
    budget: '',
  });

  const [startDate, setStartDate] = React.useState(new Date());

  React.useEffect(() => {
    setState(props.group);
  }, [props.group]);

  function refreshPage() {
    window.location.reload(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let info = { ...state, exchangeDate: startDate };
    props.updateGroup(props.group.id, props.user.id, info);
    refreshPage();
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <form className="groupviewC-content" onSubmit={handleSubmit}>
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
        dateFormat="yyyy/MM/dd"
      />
      <div className="groupviewC-viewForm-button1">
        <button className="groupviewC-viewForm-button2" type="submit">
          Edit
        </button>
      </div>
    </form>
  );
}

const mapState = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  updateGroup: (groupId, userId, info) =>
    dispatch(updateGroupThunk(groupId, userId, info)),
});

export default connect(mapState, mapDispatch)(GroupFormB);
