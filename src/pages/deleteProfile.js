import React from "react";
import Axios from "axios";
import { Form, Input, Checkbox, Button, Select } from "antd";
const { Option } = Select;

const DeleteProfile = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    props.history.push("/login");
  }
  const handleCancel = () => {
    props.history.push("/profile");
  };
  const handleDelete = async () => {
    // const server = "http://localhost:5000/users";
    const server = "https://louis-darius-contactsapp.herokuapp.com/users";

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    await Axios.delete(server, { headers: headers }, {})
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
        props.history.push("/home");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ margin: 150 }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          wrapperCol={{
            offset: 5,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleCancel}>
            Cancel
          </Button>
        </Form.Item>
        <Form.Item name="hearAboutus" label="Where did you hear about us">
          <Select placeholder="Select one" allowClear>
            <Option value="friends">Friends</Option>
            <Option value="adverts">Adverts</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>
        <Form.Item name="reason" label="Why are you leaving us">
          <Select placeholder="Select one" allowClear>
            <Option value="dataProtection">Data protection concern</Option>
            <Option value="female">Bad experience</Option>
            <Option value="other">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Tell us why in few words">
          <Input.TextArea
            name="note"
            placeholder="Samuel is a very smart and organised student"
            rows={4}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 10,
            span: 8,
          }}
        >
          <Checkbox>Would you recommand us</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 5,
            span: 8,
          }}
        >
          <Button type="danger" htmlType="submit" onClick={handleDelete}>
            Delete
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DeleteProfile;
