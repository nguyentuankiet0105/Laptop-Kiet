import React from "react";
import { Button } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";

const ButtonAddCard = () => {
  return (
    <div className="productCard__wrapButton">
      <Button className="btn--add">
        <ShoppingCartOutlined style={{ fontSize: "16px" }} />
        Add To Cart
      </Button>
    </div>
  );
};

export default ButtonAddCard;
