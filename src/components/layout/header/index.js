import {
  CloseOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../assets/images/Logo.png";
import { DropdownAccount, DropdownMiniCard } from "./MenuDropdown";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import {useSelector} from 'react-redux';

const Header = () => {

  const {cartTotalQuantity} = useSelector(state => state.cart)
  const [isShow, setIsShow] = React.useState(false);

  
  const handleShowFormSearch = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="header">
      <div className="container wrap--heading">
        <div className="tableHidden ">
          <div className="header__logo">
            <Link to="/home">
              <img src={LogoImage} alt="" />
            </Link>
          </div>
        </div>

        {!isShow ? <Navigation /> : <SearchBar />}

        <div className="tableVisible ">
          <SearchBar />
          <div className="header__iconShortCut">
            <Link to="/cart">
              <Dropdown
                overlay={DropdownMiniCard}
                placement="bottomCenter"
                arrow
              >
                <Badge count={2}>
                  <ShoppingCartOutlined style={{ color: "#fff" }} />
                </Badge>
              </Dropdown>
            </Link>

            <Dropdown overlay={DropdownAccount} placement="bottomRight" arrow>
              <Avatar
                size={36}
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        </div>

        <div className="header__iconShortCut">
          {!isShow ? (
            <SearchOutlined onClick={handleShowFormSearch} />
          ) : (
            <CloseOutlined
              className="btn--cancelFormSearch"
              onClick={handleShowFormSearch}
            />
          )}

          <Link to="/cart">
              <Badge count={cartTotalQuantity}>
                <ShoppingCartOutlined />
              </Badge>
          </Link>

          <Dropdown overlay={DropdownAccount} placement="bottomRight" arrow>
            <Avatar size={36} icon={<UserOutlined />}/>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
