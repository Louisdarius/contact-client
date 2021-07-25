import React, { useEffect, useState } from "react";
import { Avatar, Menu } from "antd";

import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ContactsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import userEvent from "@testing-library/user-event";

const user = localStorage.getItem("user");

const Nav = (props) => {
  const [current, setCurrent] = useState("home");
  const user = localStorage.getItem("user");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const handleSignout = (e) => {
    localStorage.removeItem("user");
    console.log("You have been logged out");
    props.history.push("/home");
  };
  useEffect(() => {
    console.log("You clicked the Nav");
  }, [user]);

  return (
    <Menu selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <a href="/home">Home</a>
      </Menu.Item>

      {!user && (
        <Menu.Item key="app" icon={<LoginOutlined />} onClick={handleClick}>
          <a href="/login">Login</a>
        </Menu.Item>
      )}
      {!user && (
        <Menu.Item
          key="register"
          icon={<UserAddOutlined />}
          onClick={handleClick}
        >
          <a href="/register">Register</a>
        </Menu.Item>
      )}

      {user && (
        <Menu.Item
          key="contact"
          icon={<ContactsOutlined />}
          onClick={handleClick}
        >
          <a href="/contact">Contacts</a>
        </Menu.Item>
      )}

      {user && (
        <Menu.SubMenu key="user" icon={<SettingOutlined />} title="Setting">
          <Menu.ItemGroup title="User name">
            <Menu.Item key="profile" onClick={handleClick}>
              {" "}
              <a href="/profile">View my profile</a>
            </Menu.Item>
            <Menu.Item
              key="signout"
              icon={<LogoutOutlined />}
              onClick={handleSignout}
            >
              Signout
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
      )}
    </Menu>
  );
};
export default Nav;
