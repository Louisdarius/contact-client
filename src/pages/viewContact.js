import { React, useEffect, useState } from "react";
import { Form, Input, Button, Divider } from "antd";
import Axios from "axios";

function ViewContact(props) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (!currentUser) {
    props.history.push("/login");
  }

  const [isDisabled, setIsDisabled] = useState(true);
  const handleIsDisabled = () => {
    setIsDisabled((prev) => {
      return !prev;
    });
  };

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

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  async function getContact() {
    const server =
      "https://louis-darius-contactsapp.herokuapp.com/contacts/" +
      props.match.params.id;

    await Axios.get(server, { headers: headers })
      .then((res) => setContact(res.data))
      .catch((e) => console.log(e));
  }

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
  const handleSubmit = () => {
    const server =
      "https://louis-darius-contactsapp.herokuapp.com/contacts/" +
      props.match.params.id;
    Axios.patch(server, contact, { headers: headers })
      .then((res) => {
        console.log(res.data);
        props.history.push("/contact");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => getContact());
  return (
    <div style={{ marginTop: 50 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
      >
        {isDisabled && (
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit" onClick={handleIsDisabled}>
              Edit
            </Button>
          </Form.Item>
        )}
        {!isDisabled && (
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit" onClick={handleIsDisabled}>
              Cancel
            </Button>
          </Form.Item>
        )}
        <Form.Item label="Name">
          <Input
            name="name"
            value={contact.name}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Company">
          <Input
            name="company"
            value={contact.company}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            value={contact.email}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="URL">
          <Input
            name="url"
            value={contact.url}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Divider> Numbers</Divider>
        <Form.Item label="Mobile">
          <Input
            name="mobile"
            value={contact.phone.mobile}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Telephone">
          <Input
            name="telephone"
            value={contact.phone.telephone}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Work">
          <Input
            name="work"
            value={contact.phone.work}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="School">
          <Input
            name="school"
            value={contact.phone.school}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Fax">
          <Input
            name="fax"
            value={contact.phone.fax}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Divider>Address</Divider>
        <Form.Item label="House Number">
          <Input
            name="houseNumber"
            value={contact.address.houseNumber}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Street">
          <Input
            name="street"
            value={contact.address.street}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input
            name="city"
            value={contact.address.city}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="County">
          <Input
            name="county"
            value={contact.address.county}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Post Code">
          <Input
            name="postcode"
            value={contact.address.postcode}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            name="country"
            value={contact.address.country}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Divider>Social Profile</Divider>
        <Form.Item label="Twitter">
          <Input
            name="twitter"
            value={contact.socialProfile.twitter}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Facebook">
          <Input
            name="facebook"
            value={contact.socialProfile.facebook}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="Instagram">
          <Input
            name="instagram"
            value={contact.socialProfile.instagram}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Form.Item label="LinkedIn">
          <Input
            name="linkedIn"
            value={contact.socialProfile.linkedIn}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </Form.Item>
        <Divider>Note</Divider>
        <Form.Item label="Note">
          <Input.TextArea
            name="note"
            value={contact.note}
            disabled={isDisabled}
            onChange={handleChange}
            rows={4}
          />
        </Form.Item>
        {!isDisabled && (
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Save
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
}
export default ViewContact;
