import React, { useState } from "react";
import { Button, Input } from "antd";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const localUser = {
    name: {
      first: "louis",
      last: "darius",
    },
    email: "louisdarius96@yahoo.fr",
    contacts: [
      {
        name: "Joseph",
        number: 736934876534745,
      },
      {
        name: "Christian",
        number: 990894375789387,
      },
      {
        name: "Dieu-donnee",
        number: 2538979878787,
      },
      {
        name: "Ronaldo",
        number: 38769834589,
      },
    ],
  };
  const server = "http://localhost:5000/users/login";
  const [user, setUser] = useState({
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

  const handleLogin = (e) => {
    // e.preventDefault();
    localStorage.setItem("user", localUser);
    // Axios.post(server, user)
    //   .then((res) => console.log(res.data))
    //   .catch((e) => console.log(e));
    props.history.push("/contact");
  };

  return (
    <div>
      <h3> Login page </h3>
      <Input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />{" "}
      <br />
      <br />
      <Input.Password
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      />{" "}
      <br /> <br />
      <Button variant="secondary" onClick={handleLogin}>
        {" "}
        Login
      </Button>{" "}
      <br /> <br />
      <p>
        Email: {user.email} - Password: {user.password}
      </p>
    </div>
  );
}
