import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Login,
  Signup,
  UserHome,
  LandingHome,
  UserProfileForm,
  WishListForm,
  WishListFormB,
  WishListView,
  WishItemHome,
  WishItemForm,
  WishItemFormB,
  FriendView,
  UserProfile,
  // GroupHome,
  GroupView,
  GroupFormA,
  GroupViewC,
} from './components/index';
import { me } from './store';

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
        <Route path="/profileform" component={withRouter(UserProfileForm)} />
        <Route exact path="/wishListView/:id" component={WishListView} />
        {/* <Route path="/group" component={GroupHome} /> */}

        {isLoggedIn && (
          <Switch>
            {/* <Route path="/:username" component={EditProfile} /> */}

            <Route path="/profile" component={withRouter(UserProfile)} />
            <Route path="/home" component={UserHome} />
            <Route exact path="/userprofile" component={withRouter(UserHome)} />
            <Route exact path="/wishListForm" component={WishListForm} />
            <Route exact path="/wishListFormB/:id" component={WishListFormB} />
            <Route exact path="/wishListView/:id" component={WishListView} />
            <Route exact path="/wishList/:id" component={WishItemHome} />
            <Route exact path="/itemForm/:id" component={WishItemForm} />
            <Route exact path="/itemFormB/:id/:id" component={WishItemFormB} />
            <Route exact path="/friends" component={FriendView} />
            <Route exact path="/groups" component={GroupView} />
            <Route exact path="/groupForm/" component={GroupFormA} />
            <Route exact path="/group/:id" component={GroupViewC} />
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
