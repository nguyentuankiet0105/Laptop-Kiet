import React from "react";
import { Image } from "antd";

import iconEmail from "../../../assets/images/Icon/iconEmail.png";
import iconHeart from "../../../assets/images/Icon/iconHeart.png";
import iconWave from "../../../assets/images/Icon/iconWave.png";
const ShowImage = (props) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="wrapper__image">
      <div className="wrapper__image--icon">
        <div style={{ cursor: "pointer" }}>
          <img src={iconHeart} alt="" />
        </div>
        <div style={{ cursor: "pointer" }}>
          <img src={iconWave} alt="" />
        </div>
        <div style={{ cursor: "pointer" }}>
          <img src={iconEmail} alt="" />
        </div>
      </div>
      <Image
        preview={{ visible: false }}
        width={255}
        height={444}
        src={props.srcImage}
        onClick={() => setVisible(true)}
        style={{ marginTop: "15px" }}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={props.srcImage} />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default ShowImage;
