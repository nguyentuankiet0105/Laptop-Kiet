import React from "react";

import SupportItem from "./SupportItem";

import accountIcon from "../../../assets/images/Icon/Account.png";
import SupportIcon from "../../../assets/images/Icon/Support.png";
import SavingIcon from "../../../assets/images/Icon/Saving.png";
const Support = () => {
  return (
    <div className="Support">
      <SupportItem
        srcImage={accountIcon}
        title="Product Support"
        subtitle="Up to 3 years on-site warranty available for your peace of mind."
      />

      <SupportItem
        srcImage={SupportIcon}
        title="Personal Account"
        subtitle="With big discounts, free delivery and a dedicated support specialist."
      />

      <SupportItem
        srcImage={SavingIcon}
        title="Amazing Savings"
        subtitle="Up to 70% off new Products, you can be sure of the best price."
      />
    </div>
  );
};

export default Support;
