import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import productImage from "../../../assets/images/image 42.png";

export const DropdownAccount = (
  <Menu>
    <Menu.Item>
      <Link>My Account</Link>
    </Menu.Item>
    <Menu.Item>
      <Link>My Wish List</Link>
    </Menu.Item>
    <Menu.Item>
      <Link >Create an Account</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">Sign In</Link>
    </Menu.Item>
  </Menu>
);

export const DropdownMiniCard = (
  <div className="miniCard">
    <div className="miniCard__title">
      <h2>My Card</h2>
      <p>2 item in cart</p>
      <Button className="btn--viewCard">View or Edit Your Cart</Button>
    </div>
    <div className="miniCard__listProduct">
      <div className="miniCard__listProduct--item">
        <span className="itemMiniCard--quantity">1 x</span>
        <div className="itemMiniCard--image">
          <img src={productImage} alt="" />
        </div>
        <div className="itemMiniCard--info">
          <p>EX DISPLAY : MSI Pro 16</p>
          <p>Flex-036AU 15.6 </p>
          <p>MULTITOUCH All-In-On...</p>
        </div>
        <div className="itemMiniCard--btn">
          <DeleteOutlined />
          <EditOutlined />
        </div>
      </div>
      <div className="miniCard__listProduct--item">
        <span className="itemMiniCard--quantity">1 x</span>
        <div className="itemMiniCard--image">
          <img src={productImage} alt="" />
        </div>
        <div className="itemMiniCard--info">
          <p>EX DISPLAY : MSI Pro 16</p>
          <p>Flex-036AU 15.6 </p>
          <p>MULTITOUCH All-In-On...</p>
        </div>
        <div className="itemMiniCard--btn">
          <DeleteOutlined />
          <EditOutlined />
        </div>
      </div>
    </div>
    <div className="miniCard__payBill">
      <div className="miniCard__payBill--Subtotal">
        <h3>
          Subtotal: <span>$499.00</span>
        </h3>
      </div>
      <Button className="btn--goCheckOut">Go to Checkout</Button>
    </div>
  </div>
);
