import React from "react";
import branchImage1 from "../../../assets/images/Branch/branch1.png";
import branchImage2 from "../../../assets/images/Branch/branch2.png";
import branchImage3 from "../../../assets/images/Branch/branch3.png";
import branchImage4 from "../../../assets/images/Branch/branch4.png";
import branchImage5 from "../../../assets/images/Branch/branch5.png";
import branchImage6 from "../../../assets/images/Branch/branch6.png";
import branchImage7 from "../../../assets/images/Branch/branch7.png";
const Branch = () => {
  return (
    <div className="container branch">
      <div>
        <img src={branchImage1} alt="" />
      </div>
      <div>
        <img src={branchImage2} alt="" />
      </div>
      <div>
        <img src={branchImage3} alt="" />
      </div>
      <div>
        <img src={branchImage4} alt="" />
      </div>
      <div>
        <img src={branchImage5} alt="" />
      </div>
      <div>
        <img src={branchImage6} alt="" />
      </div>
      <div>
        <img src={branchImage7} alt="" />
      </div>
    </div>
  );
};

export default Branch;
