import React from "react";
import { Avatar, Row, Col } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

const Card = (props) => {
  return (
    <div>
      <li>
        {" "}
        <span>
          <Avatar icon={<ContactsOutlined />} />
        </span>
        <span>
          {props.name}
          {props.index}
        </span>
      </li>
    </div>
  );
};
export default Card;
