import React from "react";
import { Link } from "react-router-dom";

const DetailProductContent = (props) => {
  const { title, infoDetail } = props;

  return (
    <div className="wrapper__content">
      <h1>{title}</h1>
      <Link>Be the first to review this product</Link>
      <ul>
        {infoDetail.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <span>
        <b>Have a Question?</b> <Link>Contact Us</Link>
      </span>
    </div>
  );
};

export default DetailProductContent;
