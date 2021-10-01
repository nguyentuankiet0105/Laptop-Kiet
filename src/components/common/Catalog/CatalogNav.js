import React from "react";
import { Menu, Dropdown, Button, Drawer } from "antd";
import {
  DownOutlined,
  AppstoreOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Filters from "./CatalogColumLeft/Filters";
const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const CatalogNav = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="catalogProduct__navBar">
        <div className="catalogProduct__navBar--right">
          <div className="itemNumber">
            <span>Items 1-35 of 61</span>
          </div>
          <div className="btn-filter show-xs hide">
            <Button onClick={showDrawer}>Filter</Button>
            <Drawer placement="left" onClose={onClose} visible={visible}>
              <Filters />
            </Drawer>
          </div>
          <div className="dropdown">
            <Dropdown
              className="dropDown-sortBy"
              overlay={menu}
              placement="bottomCenter"
            >
              <Button>
                Sort By:{" "}
                <b style={{ color: "black", marginLeft: "3px" }}> Position</b>{" "}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="dropdown">
            <Dropdown
              className="dropDown-show"
              overlay={menu}
              placement="bottomCenter"
            >
              <Button>
                Show:{" "}
                <b style={{ color: "black", marginLeft: "3px" }}>
                  {" "}
                  35 per page
                </b>{" "}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="icon">
            <Link onClick={props.handleIsShow}>
              <AppstoreOutlined className="icon--gridDisplay" />
            </Link>
            <Link onClick={props.handleIsShowRow}>
              <AlignLeftOutlined className="icon--rowDisplay" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogNav;
