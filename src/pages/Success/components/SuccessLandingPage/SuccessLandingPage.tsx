import React from "react";
import BackgroundBox from "../../../../assets/svg/BackgroundBox";
import { Link } from "react-router-dom";
import { Routes } from "../../../../Routes";

const SuccessLandingPage = () => {
  return (
    <div className="success-main">
      <div className="success-message-content">
        <div className="success-icon">
          <div>
            <p>✓</p>
          </div>
        </div>
        <strong>Checkout Successful</strong>
        <p>Your checkout is now successfull</p>
        <Link to={Routes.Buy}>
          <button>Got it</button>
        </Link>
      </div>
      <div className="success-grid">
        {Array(100)
          .fill(true)
          .map(() => (
            <BackgroundBox />
          ))}
      </div>
    </div>
  );
};

export default SuccessLandingPage;
