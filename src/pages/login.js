import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button, Alert } from "antd";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const server = "https://louis-darius-contactsapp.herokuapp.com/users/login";
    await Axios.post(server, user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        props.history.push("/contact");
        window.location.reload(); // reload after login
      })
      .catch((e) => {
        setError(true);
      });
  };

  return (
    <div style={{ margin: 200 }}>
      {error && (
        <div
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 300,
            marginRight: 300,
          }}
        >
          <Alert
            message="Error"
            description="Wrong email or password. Please try again"
            type="error"
            showIcon
          />
        </div>
      )}

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="Email">
          <Input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Ex: john34@yahoo.com"
            required
          />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password..."
            required
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit" onClick={handleLogin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
