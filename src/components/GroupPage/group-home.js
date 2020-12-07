import React from 'react';
import { Link } from 'react-router-dom';
import './group-z.css';

class GroupHome extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };
  }

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCloseForm = () => {
    this.setState({ showForm: false });
  };

  render() {
    const { showForm } = this.state;
    return (
      <div className="container">
        <div className="container1">
          <div className="title">Groups</div>
          <div>Add Groups</div>
          <div className="button-container">
            <div className="button">
              <Link className="button2" to="/groups">
                Add Group
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupHome;
