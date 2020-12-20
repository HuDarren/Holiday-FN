import React from 'react';
import './landing-z.css';

function LandingHome() {
  return (
    <div>
      <div className="landing-image-container">
        <img
          alt="img"
          className="landing-image"
          src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1608421349/christmasgift_oezpn2.jpg"
        />
      </div>
      <div className="landing-container1">
        <div className="landing-content1">
          <img
            className="landing-image1"
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608494908/green-check-transparent-3_cbpynn.png'
            }
          ></img>
          <div>Set up a WishList</div>
        </div>
        <div className="landing-content1">
          <img
            className="landing-image1"
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608494908/green-check-transparent-3_cbpynn.png'
            }
          ></img>
          <div>Create an Event</div>
        </div>
        <div className="landing-content1">
          <img
            className="landing-image1"
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608494908/green-check-transparent-3_cbpynn.png'
            }
          ></img>
          <div>Celebrate the Holiday</div>
        </div>
      </div>
      <div className="landing-container2">
        <div className="landing2-content1">
          <div className="landing2-text1">Make the most of your Holidays</div>
        </div>
        <div className="landing2-content2">
          <div className="landing2-text2">
            Holiday makes giving presents easier. Take all the guess work out
            and make sure your family and friends get whats on their wishlist.
            Your mom wanted an iphone but you got her a galaxy instead ? Got
            your cousin a size 6 shoe when he s a size 9? Tired of having
            10cents left over on your gift card? Never have a disappointed
            holiday again!
          </div>
        </div>
      </div>
      <div className="landing-container3">
        <div>
          <div>Sign up Now</div>
        </div>
        <div>
          <div>Or Demo Now </div>
        </div>
      </div>

      <div className="landing-container4">
        <div 
        className="landing4-contentA">
          <div className="landing4-content">
            <img
              className="landing4-image"
              alt="img"
              src={
                'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608500217/5stars_ibukmb.png'
              }
            ></img>
            <div className="landing4-text1">I cant believe its that easy!</div>
            <div className="landing4-text2">Got this but now this. </div>
            <div className="landing4-text3">-George Wu</div>
          </div>
          <div className="landing4-content">
            <img
              className="landing4-image"
              alt="img"
              src={
                'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608500217/5stars_ibukmb.png'
              }
            ></img>
            <div className="landing4-text1">I cant believe its that easy!</div>
            <div className="landing4-text2">Got this but now this. </div>
            <div className="landing4-text3">-Nancy Naomi</div>
          </div>
        </div>
      </div>

      <div className="landing-container5">
        <div>About the Creator </div>
        <div>
          Hi, i m the creator of Holiday. file a complaint here. Contact Me
        </div>
        <div>contact form here</div>
      </div>
    </div>
  );
}

export default LandingHome;
