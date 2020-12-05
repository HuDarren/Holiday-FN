import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Login,
  Signup,
  UserHome,
  LandingHome,
  UserProfileForm,
  WishListForm,
  WishListView,
  WishItemHome,
  WishItemForm,
} from "./components/index";
import { me } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        {/* <Route path="/home" component={LandingHome} /> */}

        {isLoggedIn && (
          <Switch>
            {/* <Route path="/:username" component={EditProfile} /> */}

            <Route
              path="/profile"
              component={withRouter(UserProfileForm)}
            />
            <Route path="/home" component={UserHome} />
            <Route exact path="/userprofile" component={withRouter(UserHome)} />
            <Route exact path="/wishListForm" component={WishListForm} />
            <Route exact path="/wishListView" component={WishListView} />
            <Route exact path="/wishList/:id" component={WishItemHome} />
            <Route exact path="/itemForm/:id" component={WishItemForm} />
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
