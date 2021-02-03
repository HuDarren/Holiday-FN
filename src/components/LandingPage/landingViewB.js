import React from 'react';
import './landingViewB.css';

function landingViewB() {
  return (
    <div className="landingB-container">
      <div className="landingB-title">
        <div className="landingB-titleA"> Fabric and Crafts</div>
      </div>

      <div class="containerB gridB centerB">
        <div className="landingB-content">
          <img
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1609448953/wall6_gpri1f.jpg'
            }
            className="landingB-image"
          ></img>
        </div>
        <div className="landingB-content">
          <img
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1609448953/wall5_tjfl2f.jpg'
            }
            className="landingB-image"
          ></img>
        </div>
        <div className="landingB-content">
          <img
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1609448952/wall4_a7tp8y.jpg'
            }
            className="landingB-image"
          ></img>
        </div>
        <div className="landingB-content">
          <img
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1609448952/wall1_w7gozk.jpg'
            }
            className="landingB-image"
          ></img>
        </div>
        <div className="landingB-content">
          <img
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1609448952/wall3_dntgpv.jpg'
            }
            className="landingB-image"
          ></img>
        </div>
        <div className="landingB-content">
          <img
            alt="img"
            src={
              'https://res.cloudinary.com/dsi0jbonx/image/upload/v1609448952/wall2_nlih16.jpg'
            }
            className="landingB-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default landingViewB;
