import React from "react";
import { Button } from "antd";

const MoreInfo = () => {
  const [isShowText, setIsShowText] = React.useState(false);
  const toggleClass = () => {
    setIsShowText(!isShowText);
  };
  return (
    <div className="MoreInfo">
      <div
        className={
          !isShowText ? "MoreInfo--text MoreInfo--hideText" : "MoreInfo--text"
        }
      >
        <p>
          MSI has unveiled the Prestige Series line of business-class and gaming
          notebooks. Tuned for color accuracy, the Prestige Series also
          leverages True Color Technology, which allows users to adjust the
          display profile to best fit their computing needs.
        </p>

        <p>
          There are six different screen profiles, which are tuned for gaming,
          reducing eye fatigue, sRGB color accuracy, increasing clarity for
          words and lines, reducing harmful blue light, and optimizing contrast
          for watching movies.
        </p>
        <p>
          Given the various display profiles and discrete graphics chip, the
          Prestige Series notebooks can be used for various design work as well
          as for office tasks given that the screen can be adjusted for better
          clarity, color accuracy, or for eye strain reduction. Users working
          with video or 3D rendering will appreciate the "movie mode" for which
          contrast is increased.
        </p>
        <p>
          Home users or students can benefit from the "anti-blue" and the
          "office mode" options, both of which are designed to reduce eye
          strain. This is helpful when working on the computer for extended
          periods of time. Additionally, in their down time, students can also
          use the "gamer mode" to increase the screen brightness.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quisquam deleniti officia ipsam harum ipsa corporis veritatis nam
          molestias sapiente quae iste unde, rerum vitae ea velit hic animi ut.
        </p>
      </div>
      {!isShowText ? <div className="pseudo--WrapText"></div> : null}
      <Button onClick={toggleClass}>More</Button>
    </div>
  );
};

export default MoreInfo;
