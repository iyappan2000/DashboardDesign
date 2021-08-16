import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Dropdowns() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#1">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#2">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div style={{ display: "flex" }}>
      <p style={{ paddingRight: "10px" }}>show by:</p>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a
          href="#1"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
          style={{
            background: "#01579b",
            borderRadius: "5px",
            color: "white",
            padding: "4px",
            paddingBottom: "-7px",
            height: "28px",
          }}
        >
          year <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
}

export default Dropdowns;
