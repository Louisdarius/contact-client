import React, { useEffect, useState } from "react";
import { Row, Col, Button, Divider, Card, Avatar, Space } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  PlusOutlined,
  UserOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Contact = (props) => {
  const user = localStorage.getItem("user");
  if (!user) {
    props.history.push("/login");
  }

  const [contacts, setContacts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const server = "http://localhost:5000/contacts";
  const server = "https://louis-darius-contactsapp.herokuapp.com/contacts";

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  async function getContacts() {
    await Axios.get(server, { headers: headers })
      .then((res) => {
        setContacts(res.data);
      })
      .catch((e) => console.log(e));
  }

  const deleteMe = async (contact) => {
    console.log(contact);
    const confirmation = window.confirm(
      "Are you sure you want to delete this record?"
    );
    confirmation &&
      (await Axios.delete(`${server}/${contact._id}`, { headers: headers }, {})
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e)));
  };
  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  //   const searchContacts = contacts.filter((c) => c.name === searchTerm);
  //   setContacts(searchContacts);
  // };

  useEffect(() => getContacts());

  return (
    <div>
      <div>
        <h1 style={{ marginTop: 30 }}>Contacts</h1>
        <Divider orientation="left" />
        <div style={{ margin: "auto" }}>
          <Link to="addContact">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
          </Link>
        </div>

        <div style={{ textAlign: "left", marginLeft: 100 }}>
          {/* <Input
            prefix={<SearchOutlined />}
            value={searchTerm}
            placeholder="Search for a name"
            allowClear
            // onChange={handleSearch}
            style={{ width: 200 }}
          /> */}
        </div>

        <Row>
          {contacts.map((contact, index) => (
            <Space key={index} size={[8, 16]} wrap>
              <Col span={6}>
                <Card
                  style={{ width: 300, margin: 20 }}
                  // cover={
                  //   <img
                  //     alt="example"
                  //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  //   />
                  // }
                  actions={[
                    <Link to={`viewContact/${contact._id}`}>
                      {" "}
                      <EyeOutlined key="view" />
                    </Link>,
                    <Link onClick={() => deleteMe(contact)}>
                      {" "}
                      <DeleteOutlined key="delete" />
                    </Link>,
                  ]}
                >
                  <Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={contact.name}
                    description={contact.phone.mobile}
                  />
                </Card>
              </Col>
            </Space>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Contact;
