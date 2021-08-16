import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";
function categoriesDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <Button style={{ backgroundColor: "#01579b", color: "white" }}>
          Categories
          <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
}

export default categoriesDropdown;
