import React from "react";
import { Link } from "react-router-dom";

const AboutProductContent = (props) => {
  const { title, content, description } = props;
  return (
    <div className="wrapper__content">
      <h1>{title}</h1>
      <Link>Be the first to review this product</Link>
      <p>{content}</p>
      <p>{description}</p>
      <span>
        <b>Have a Question?</b> <Link>Contact Us</Link>
      </span>
    </div>
  );
};

export default AboutProductContent;
