import React from "react";
import ZipPayImage from "../../../assets/images/Body/Zip.png";
import { Link } from "react-router-dom";

const ZipPay = () => {
  return (
    <div className="container ZipPay">
      <img src={ZipPayImage} alt="" />
      <span className="ZipPay__content">|</span>
      <span className="ZipPay__content">
        <b>own</b> it now, up to 6 months interest free <Link> learn more</Link>
      </span>
    </div>
  );
};

export default ZipPay;
