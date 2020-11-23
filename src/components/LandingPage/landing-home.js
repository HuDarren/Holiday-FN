import React from "react";
import { connect } from "react-redux";

function LandingHome(props) {
  return (
    <div>
      <img
        alt="img"
        className="home-message"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1605219267/board_x7obkk.png"
      />
      <img
        alt="img"
        className="home-background"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1605217927/christmasJIP2_tztkyh.gif"
      />
      <div></div>
    </div>
  );
}

// const mapState = (state) => ({
//   email: state.user.email,
// });

export default connect()(LandingHome);
