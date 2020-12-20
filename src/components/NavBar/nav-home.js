/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store';
import './nav-z.css';

const NavHome = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <nav>
      {isLoggedIn ? (
        <div className="nav-container2">
          <div className="nav-title">
            <Link className="nav-title2" to="/home">
              Holiday
            </Link>
          </div>
          <div className="nav-log">
            <a className="nav-log2" href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
          <div className="nav-profile">
            <Link className="nav-profile3" to="/profile">
              <img
                className="nav-profile2"
                alt="img"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1607114436/snowman_mtdwl8.png"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="nav-container2">
          <div className="nav-title">
            <Link className="nav-title2" to="/home">
              Holiday
            </Link>
          </div>
          <div className="nav-content">
            <div className="nav-login">
              <Link className="nav-login2" to="/login">
                Login
              </Link>
            </div>
            <div className="nav-signup">
              <Link className="nav-signup2" to="/signup">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(NavHome);

NavHome.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
