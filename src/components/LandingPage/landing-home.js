import React from 'react';
import { Link } from 'react-router-dom';
import LandingViewA from './landingViewA';
import LandingViewB from './landingViewB';
import LandingViewC from './landingViewC';
import LandingViewD from './landingViewD';
import './landing-z.css';

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
              <Link className="landingI-button2" to="/login">
                <span className="landingI-buttontext">Sign up today </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <LandingViewA />
      <LandingViewB />
      <LandingViewC />
      <LandingViewD />
    </div>
  );
}

export default LandingHome;
