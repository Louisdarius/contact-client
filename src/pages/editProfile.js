import React, { useState } from "react";
import { Button, Input } from "antd";
import Axios from "axios";

const EditProfile = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (!currentUser) {
    props.history.push("/login");
  }

  const [user, setUser] = useState({
    first: currentUser.name.first,
    last: currentUser.name.last,
    email: currentUser.email,
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

  const handleCancel = () => {
    props.history.push("/profile");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const server = "http://localhost:5000/users";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = {
      name: {
        first: user.first,
        last: user.last,
      },
      email: user.email,
      password: user.password,
    };

    // axios({
    //     method: 'post', //you can set what request you want to be
    //     url: 'https://example.com/request',
    //     data: {id: varID},
    //     headers: {
    //       Authorization: 'Bearer ' + varToken
    //     }
    //   })

    // await Axios({
    //   method: "patch", //you can set what request you want to be
    //   url: server,
    //   data: data,
    //   headers: {
    //     Authorization: "Bearer " + token,
    //   },
    // });

    await Axios.patch(server, data, { headers: headers })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(res.data));
        props.history.push("/profile");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h3> Edit profile</h3>
      <p>
        {" "}
        First: {user.first} - Last: {user.last} - Email: {user.email} -
        Password: {user.password}{" "}
      </p>
      <Input
        type="text"
        name="first"
        value={user.first}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="last"
        value={user.last}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="New Password ..."
      />
      <Button onClick={handleCancel}> Cancel</Button>

      <Button onClick={handleSubmit}> Submit</Button>
    </div>
  );
};

export default EditProfile;
