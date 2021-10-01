import React from "react";
import { Button, Menu } from "antd";
const { SubMenu } = Menu;

const Filters = () => {
  return (
    <div className="Menu-Filter">
      <div className="Menu-Filter__Wrapper">
        <div className="Menu-Filter__heading">
          <h2>Filters</h2>
          <Button className="btn btn--clear">Clear Filters</Button>
        </div>
        <div className="Menu-Filter__category">
          <Menu style={{ width: 200 }} mode="inline">
            <SubMenu title="Category">
              <Menu.Item key="1">CUSTOM PCS</Menu.Item>
              <Menu.Item key="2">MSI ALL-IN-ONE PCS</Menu.Item>
              <Menu.Item key="3">HP/COMPAQ PCS1</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="Menu-Filter__category">
          <Menu style={{ width: 200 }} mode="inline">
            <SubMenu title="Price">
              <Menu.Item key="1">$1,000.00 - $2,000.00</Menu.Item>
              <Menu.Item key="2">$2,000.00 - $3,000.00</Menu.Item>
              <Menu.Item key="3">$4,000.00 - $5,000.00</Menu.Item>
              <Menu.Item key="4">$5,000.00 - $6,000.00</Menu.Item>
              <Menu.Item key="5">$6,000.00 - $7,000.00</Menu.Item>
              <Menu.Item key="6">$7,000.00 And Above</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="Menu-Filter__category">
          <Menu style={{ width: 200 }} mode="inline">
            <SubMenu title="Color">
              <div className="wrap--RadioColor">
                <div
                  className="customRadio"
                  style={{ backgroundColor: "black" }}
                ></div>
                <div
                  className="customRadio"
                  style={{ backgroundColor: "#DB0000" }}
                ></div>
              </div>
            </SubMenu>
          </Menu>
        </div>
        <div className="Menu-Filter__category">
          <Menu style={{ width: 200 }} mode="inline">
            <SubMenu title="Filter Name"></SubMenu>
          </Menu>
        </div>
        <Button className="btn btn--apply">Apply Filters (2)</Button>
      </div>
    </div>
  );
};

export default Filters;
