import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Axios from "axios";

export default function Register(props) {
  const { SERVER } = process.env;
  const [user, setUser] = useState({
    name: {
      first: "",
      last: "",
    },
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        name: { ...user.name, [name]: value },
        [name]: value,
      };
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // const server = "http://localhost:5000/users";
    const server = "https://louis-darius-contactsapp.herokuapp.com/users";

    Axios.post(server, user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        props.history.push("/contact");
        window.location.reload(); // reload after login
      })
      .catch((e) => {
        console.log(e);
        console.log("Sorry something went wrong");
      });
  };

  return (
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <h1> Register </h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="First Name">
          <Input
            name="first"
            value={user.name.first}
            onChange={handleChange}
            placeholder="Ex: Liam"
            required
          />
        </Form.Item>

        <Form.Item label="Last Name">
          <Input
            name="last"
            value={user.name.last}
            onChange={handleChange}
            placeholder="Ex: Granham"
            required
          />
        </Form.Item>

        <Form.Item label="Email">
          <Input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Ex: John56@yahoo.com"
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
          <Button type="primary" htmlType="submit" onClick={handleRegister}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
