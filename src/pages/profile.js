import React, { useState } from "react";
import Axios from "axios";
import {
  Row,
  Col,
  List,
  Typography,
  Statistic,
  Divider,
  Form,
  Input,
  Button,
} from "antd";
import { ContactsOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    props.history.push("/login");
  }

  const [newUser, setNewUser] = useState({
    name: {
      first: "",
      last: "",
    },
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const { SERVER } = process.env;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return {
        ...prev,
        name: { ...prev.name, [name]: value },
        [name]: value,
      };
    });
  };
  const handleIsDisabled = (e) => {
    console.log(e.target);
    setIsDisabled((prev) => {
      return !prev;
    });
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

  const handleSave = async () => {
    // const server = "http://localhost:5000/users";
    const server = "https://louis-darius-contactsapp.herokuapp.com/users";

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    await Axios.patch(server, newUser, { headers: headers })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  const menu = [
    <Link onClick={handleSignout}> Sign Out</Link>,
    // <Link> Logout all Devices </Link>,
    <Link to="deleteProfile">Delete account</Link>,
  ];
  return (
    <div style={{ marginTop: 20 }}>
      <h1>Profile</h1>{" "}
      <Row style={{ padding: 100 }}>
        <Col span={6}>
          <div style={{ paddingRight: 50 }}>
            {/* <Divider orientation="left">Default Size</Divider> */}
            <List
              header={<div>Setting</div>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={menu}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Col>
        <Col span={18}>
          <div style={{ paddingLeft: 100, textAlign: "left" }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
              initialValues={{ remember: true }}
            >
              {isDisabled && (
                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                  <Button
                    name="edit"
                    type="primary"
                    htmlType="submit"
                    onClick={handleIsDisabled}
                  >
                    Edit
                  </Button>
                </Form.Item>
              )}
              {!isDisabled && (
                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                  <Button
                    name="cancel"
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              )}
              <Form.Item label="First Name">
                <Input
                  name="first"
                  value={newUser.name.first}
                  onChange={handleChange}
                  placeholder={user.name.first}
                  required
                  disabled={isDisabled}
                />
              </Form.Item>

              <Form.Item label="Last Name">
                <Input
                  name="last"
                  value={newUser.name.last}
                  onChange={handleChange}
                  placeholder={user.name.last}
                  required
                  disabled={isDisabled}
                />
              </Form.Item>

              <Form.Item label="Email">
                <Input
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  placeholder={user.email}
                  required
                  disabled={isDisabled}
                />
              </Form.Item>

              {!isDisabled && (
                <Form.Item label="Password">
                  <Input.Password
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    placeholder="Password..."
                    required
                  />
                </Form.Item>
              )}

              {!isDisabled && (
                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                  <Button
                    name="save"
                    type="primary"
                    htmlType="submit"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Form.Item>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Profile;
