import React from "react";

const CompareProducts = (props) => {
  return (
    <div className="CompareProducts">
      <div className="CompareProducts__Wrapper">
        <div className="CompareProducts__heading">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CompareProducts;
