import React from 'react';
import { Link } from 'react-router-dom';
import MessageHome from '../Message/message-home';
import LandingViewA from "./landingViewA"
import LandingViewB from "./landingViewB"

import './landing-z.css';
import LandingViewC from './landingViewC';

function LandingHome() {
  return (
    <div>
      <div className="landing-image-container">
        <div className="landingI-contentA">
          <div className="landingI-content1">
            <div className="landingI-text1">
              The Best App To Celebrate with Friends and Family
            </div>
          </div>
          <div className="landingI-content2">
            <button className="landingI-button1">
              <Link className="landingI-button2" to="/login"><span className="landingI-buttontext">Sign up today </span></Link>
              
            </button>
          </div>
        </div>
      </div>
      <LandingViewA/>
      <LandingViewB/>
      <LandingViewC/>
      
      <div className="landing-container1">
        <div
        className="landing1-contentA"
        
        >        <div className="landing-content1">
          <img
            className="landing-image1"
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608494908/green-check-transparent-3_cbpynn.png'
            }
          ></img>
          <div
          className="landing1-text"
          >Set up a WishList</div>
        </div>
        <div className="landing-content1">
          <img
            className="landing-image1"
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608494908/green-check-transparent-3_cbpynn.png'
            }
          ></img>
          <div
          className="landing1-text"
          >Create an Event</div>
        </div>
        <div className="landing-content1">
          <img
            className="landing-image1"
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608494908/green-check-transparent-3_cbpynn.png'
            }
          ></img>
          <div
          className="landing1-text"
          >Celebrate the Holiday</div>
        </div></div>

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
        <div className="landing3-content">
        <div 
        className="landing3-text"
        >
          <div>Sign Up Today For Free</div>
        </div>
        <div>
          <div>Or See Demo Now </div>
        </div>
        </div>
      </div>

      <div className="landing-container4">
        <div className="landing4-contentA">
          <div className="landing4-content">
            <img
              className="landing4-image"
              alt="img"
              src={
                'https://res.cloudinary.com/dsi0jbonx/image/upload/v1608500217/5stars_ibukmb.png'
              }
            ></img>
            <div className="landing4-text1">I cant believe its that easy!</div>
            <div className="landing4-text2">Cant have another christmas exchange without this! </div>
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
            <div className="landing4-text1">Wow! This is Great!</div>
            <div className="landing4-text2">Created a wishlist and shared it with friends. So easy a Cave-Woman can do it!</div>
            <div className="landing4-text3">-Nancy Naomi</div>
          </div>
        </div>
      </div>

      <div className="landing-container5">
        <div className="landing5-contentA">
          <div className="landing5-content">
            <div className="landing5-text1"> About </div>
            <img
              className="landing5-image"
              alt="img"
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCI3398aPuuZJRmds58sIyLzqKH_ezkotXQ&usqp=CAU'
              }
            ></img>
            <div className="landing5-text2">Founder : Darren Hu</div>
            <div className="landing5-text3">
              Got questions? Got a complaint? Dont wait! Email me now!
            </div>
          </div>
          <div className="landing5-content">
            <MessageHome />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHome;
