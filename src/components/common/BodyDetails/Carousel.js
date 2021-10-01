import { Carousel } from "antd";
import Banner1 from "../../../assets/images/Body/banner_1.webp";
import Banner3 from "../../../assets/images/Body/banner_3.webp";
import Banner2 from "../../../assets/images/Body/banner_2.webp";
import Banner4 from "../../../assets/images/Body/banner_4.jpg";
import Banner5 from "../../../assets/images/Body/banner_5.webp";
import Banner6 from "../../../assets/images/Body/banner_6.webp";
import Banner7 from "../../../assets/images/Body/banner_7.webp";

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const carousel = () => {
  return (
    <>
      <Carousel autoplay className="container Carousel--banner">
        <div>
          <img src={Banner1} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={Banner2} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={Banner3} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={Banner4} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={Banner5} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={Banner6} alt="" style={contentStyle} />
        </div>
        <div>
          <img src={Banner7} alt="" style={contentStyle} />
        </div>
      </Carousel>
    </>
  );
};
export default carousel;
