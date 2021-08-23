import React, { useState } from "react";
import Axios from "axios";
import { Form, Input, Button, Divider } from "antd";

const AddContact = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (!currentUser) {
    props.history.push("/login");
  }

  const [contact, setContact] = useState({
    name: "",
    company: "",
    phone: {
      mobile: "",
      telephone: "",
      work: "",
      school: "",
      fax: "",
    },
    email: "",
    url: "",
    address: {
      houseNumber: "",
      street: "",
      city: "",
      county: "",
      postcode: "",
      country: "",
    },
    socialProfile: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedIn: "",
    },
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return {
        ...prev,
        phone: {
          ...prev.phone,
          [name]: value,
        },
        address: {
          ...prev.address,
          [name]: value,
        },
        socialProfile: {
          ...prev.socialProfile,
          [name]: value,
        },
        [name]: value,
      };
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    // const server = "http://localhost:5000/contacts";
    const server = "https://louis-darius-contactsapp.herokuapp.com/contacts";

    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Axios.post(server, contact, { headers: headers })
    Axios.post(server, contact, { headers: headers })

      .then((res) => {
        console.log(res.data);
        props.history.push("/contact");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ marginTop: 100 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
      >
        <Form.Item label="Name">
          <Input
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </Form.Item>
        <Form.Item label="Company">
          <Input
            name="company"
            value={contact.company}
            onChange={handleChange}
            placeholder="Company"
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Ex: john@yahoo.com"
          />
        </Form.Item>

        <Form.Item label="URL">
          <Input
            name="url"
            value={contact.url}
            onChange={handleChange}
            placeholder="Ex: www.johnportfolio.org"
          />
        </Form.Item>
        <Divider> Numbers</Divider>
        <Form.Item label="Mobile">
          <Input
            name="mobile"
            value={contact.phone.mobile}
            onChange={handleChange}
            placeholder=" (+44) 7423568734"
            required
          />
        </Form.Item>

        <Form.Item label="Telephone">
          <Input
            name="telephone"
            value={contact.phone.telephone}
            onChange={handleChange}
            placeholder=" (+44) 7423568734"
          />
        </Form.Item>

        <Form.Item label="Work">
          <Input
            name="work"
            value={contact.phone.work}
            onChange={handleChange}
            placeholder=" (+44)1703568734"
          />
        </Form.Item>

        <Form.Item label="School">
          <Input
            name="school"
            value={contact.phone.school}
            onChange={handleChange}
            placeholder=" (+44) 7423568734"
          />
        </Form.Item>
        <Form.Item label="Fax">
          <Input
            name="fax"
            value={contact.phone.fax}
            onChange={handleChange}
            placeholder=" (+44) 7423568734"
          />
        </Form.Item>
        <Divider>Address</Divider>
        <Form.Item label="House Number">
          <Input
            name="houseNumber"
            value={contact.address.houseNumber}
            onChange={handleChange}
            placeholder=" 256"
          />
        </Form.Item>

        <Form.Item label="Street">
          <Input
            name="street"
            value={contact.address.street}
            onChange={handleChange}
            placeholder=" Victoria Avenue"
          />
        </Form.Item>

        <Form.Item label="City">
          <Input
            name="city"
            value={contact.address.city}
            onChange={handleChange}
            placeholder=" London"
          />
        </Form.Item>

        <Form.Item label="County">
          <Input
            name="county"
            value={contact.address.county}
            onChange={handleChange}
            placeholder=" Hampshire"
          />
        </Form.Item>

        <Form.Item label="Post Code">
          <Input
            name="postcode"
            value={contact.address.postcode}
            onChange={handleChange}
            placeholder=" ER12 8RT"
          />
        </Form.Item>

        <Form.Item label="Country">
          <Input
            name="country"
            value={contact.address.country}
            onChange={handleChange}
            placeholder="United Kingdom"
          />
        </Form.Item>
        <Divider>Social Profile</Divider>
        <Form.Item label="Twitter">
          <Input
            name="twitter"
            value={contact.socialProfile.twitter}
            onChange={handleChange}
            placeholder=" @gemma/twitter.com"
          />
        </Form.Item>

        <Form.Item label="Facebook">
          <Input
            name="facebook"
            value={contact.socialProfile.facebook}
            onChange={handleChange}
            placeholder=" @gemma/facebook.com"
          />
        </Form.Item>

        <Form.Item label="Instagram">
          <Input
            name="instagram"
            value={contact.socialProfile.instagram}
            onChange={handleChange}
            placeholder=" @gemma/instagram.com"
          />
        </Form.Item>
        <Form.Item label="LinkedIn">
          <Input
            name="linkedIn"
            value={contact.socialProfile.linkedIn}
            onChange={handleChange}
            placeholder=" @gemma/linkedIn.com"
          />
        </Form.Item>
        <Divider>Note</Divider>

        <Form.Item label="Note">
          <Input.TextArea
            name="note"
            value={contact.note}
            onChange={handleChange}
            placeholder="Samuel is a very smart and organised student"
            rows={4}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit" onClick={handleSumbit}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddContact;
