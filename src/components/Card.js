import React from "react";
import { Avatar, Row, Col } from "antd";

const Card = (props) => {
  return (
    <div>
      <Row>
        <Col span={4}>
          {" "}
          <Avatar />
        </Col>
        <Col span={20}>{props.name}</Col>
      </Row>
    </div>
  );
};
export default Card;
