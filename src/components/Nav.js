import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Menu } from "antd";
import Axios from "axios";

import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ContactsOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import userEvent from "@testing-library/user-event";

const Nav = (props) => {
  const [current, setCurrent] = useState("home");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const handleSignout = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    // const server = "http://localhost:5000/users/logout";
    const server =
      "https://louis-darius-contactsapp.herokuapp.com/users/logout";

    await Axios.post(server, {}, { headers: headers })
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
        props.history.push("/home");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

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
          <Menu.ItemGroup title={user.name.first}>
            <Menu.Item key="profile" onClick={handleClick}>
              {" "}
              <a href="/profile">Profile</a>
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
export default withRouter(Nav);
