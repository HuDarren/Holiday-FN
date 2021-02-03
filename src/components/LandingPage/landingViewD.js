import React from 'react';
import './landingViewD.css';
import Message from '../Message/message-home';

function landingViewD() {
  return (
    <div className="landingD-container">
      <div className="landingD-container2">
        <div className="landingD-content">
          <div className="landingD-titleA">Make the most of your Holiday</div>
        </div>
        <div className="landingD-content">
          <div className="landingD-title">Share the Joy of Giving</div>
          <div className="landingD-detail">
            Life is not always about receiving but rather spreading happiness
            and helping others. Holiday is an application that make the gift
            exchange process simple and make sure you get the perfect gift for
            that special someone. You can create a holiday exchange with
            friends/family/colleagues or simply check out a wishlist and spread
            the joy.
          </div>
        </div>
        <div className="landingD-content">
          <div className="landingD-title">Simple and Fun to Use</div>
          <div className="landingD-detail">Set Up a personal WishList</div>
          <div className="landingD-detail">Create a Event</div>
          <div className="landingD-detail">Grant a Wish</div>
        </div>
        <div className="landingD-content">
          <div className="landingD-title">Have a Question? I can help! </div>
          <Message />
        </div>
      </div>
    </div>
  );
}

export default landingViewD;
