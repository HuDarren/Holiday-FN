import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Login, Signup, UserHome, LandingHome } from "./components";
import UserProfileForm from "./components/UserPage/user-profileForm";
import { me } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route path="/login" component={withRouter(Login)} />
        <Route path="/signup" component={withRouter(Signup)} />
        <Route path="/username" component={withRouter(UserHome)} />
        <Route path="/profileform" component={withRouter(UserProfileForm)} />
        {/* <Route path="/home" component={LandingHome} /> */}

        {isLoggedIn && (
          <Switch>
            {/* <Route path="/:username" component={EditProfile} /> */}
            <Route path="/home" component={withRouter(LandingHome)} />
          </Switch>
        )}
        <Route component={LandingHome} />
      </Switch>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};