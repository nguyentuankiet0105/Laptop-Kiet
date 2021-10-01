import React from "react";

const NewsItems = (props) => {
  return (
    <div className="newsOffer__wrapper">
      <div>
        <img src={props.src} alt="" />
      </div>
      <div className="newsOffer__wrapper--content">
        <p>{props.content}</p>
      </div>
      <div className="newsOffer__wrapper--date">
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default NewsItems;
