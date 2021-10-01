import React from "react";
import { Link } from "react-router-dom";

const IntroduceCard = (props) => {
  const { srcImage, title, linkTo } = props;
  const backgroundCard = {
    backgroundImage: `url(${srcImage})`,
  };
  return (
    <div className="introduceCard" style={backgroundCard}>
      <h2 className="introduceCard__content">{title}</h2>
      <Link className="introduceCard__link" to="/catalog">
        See All Products
      </Link>
    </div>
  );
};

export default IntroduceCard;
