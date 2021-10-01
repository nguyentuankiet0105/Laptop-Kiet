import { Button, Drawer } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import * as React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="header__navigation">
      <div className="tableHidden">
        <ul className="header__navigation--WrapItem">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link>Laptops</Link>
          </li>
          <li>
            <Link>Desktop PCs</Link>
          </li>
          <li>
            <Link>Networking Devices</Link>
          </li>
          <li>
            <Link>Printers & Scanners</Link>
          </li>
          <li>
            <Link>PC Parts</Link>
          </li>
          <li>
            <Link>All Other Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutUs">Our Deals</Link>
          </li>
        </ul>
      </div>
      <div className="tableVisible">
        <UnorderedListOutlined
          style={{ fontSize: "30px", color: "#fff" }}
          onClick={showDrawer}
        />
        <Drawer
          title="Menu"
          placement="left"
          onClose={onClose}
          visible={visible}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link>Laptops</Link>
          </li>
          <li>
            <Link>Desktop PCs</Link>
          </li>
          <li>
            <Link>Networking Devices</Link>
          </li>
          <li>
            <Link>Printers & Scanners</Link>
          </li>
          <li>
            <Link>PC Parts</Link>
          </li>
          <li>
            <Link>All Other Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutUs">Our Deals</Link>
          </li>
          <li>
            <Link to="/login">Sign in</Link>
          </li>
        </Drawer>
      </div>
    </div>
  );
};

export default Navigation;
