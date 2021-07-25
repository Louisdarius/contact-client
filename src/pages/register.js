import React, { useState } from "react";
import { Input, Button } from "antd";
import Axios from "axios";

export default function Register(props) {
  const server = "http://localhost:5000/users";
  const [user, setUser] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: {
        first: user.first,
        last: user.last,
      },
      email: user.email,
      password: user.password,
    };
    Axios.post(server, data)
      .then((res) => {
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("token", res.data.token);
        props.history.push("/contacts");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h3> Register page </h3>
      <Input
        type="text"
        name="first"
        value={user.first}
        onChange={handleChange}
        placeholder="First Name..."
        required
      />{" "}
      <br /> <br />
      <Input
        type="text"
        name="last"
        value={user.last}
        onChange={handleChange}
        placeholder="Last Name..."
        required
      />{" "}
      <br /> <br />
      <Input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email..."
        required
      />{" "}
      <br /> <br />
      <Input.Password
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password..."
        required
      />{" "}
      <br />
      <br />
      <Button variant="secondary" onClick={handleRegister}>
        Register
      </Button>{" "}
      <br /> <br />
      <p>
        {" "}
        First: {user.first} - Last: {user.last} - Email: {user.email} -
        Password: {user.password}.
      </p>
    </div>
  );
}
