import React from "react";
import { Row, Col } from "antd";
import Card from "../components/Card";

const Contact = () => {
  const data = [
    {
      imageSource:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Hieldy Jackson",
    },
    {
      imageSource:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Maxime",
    },
    {
      imageSource:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Ronaldo",
    },
    {
      imageSource:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      name: "Carlos",
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <div>
            <h3>List of all contacts</h3>
            <div>
              <Card
                imageSource="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                name="Louis Darius"
              />
              <Card
                imageSource="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                name="Abega smith"
              />
              <Card
                imageSource="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                name="Abiola Khan"
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <h3>each contact info</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Contact;
