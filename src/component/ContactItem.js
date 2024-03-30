import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg={2}>
          <img
            width={70}
            height={70}
            src="https://img.icons8.com/3d-fluency/94/user-male-circle.png"
            alt="user-male-circle"
          />
        </Col>
        <Col lg={10}>
          <div className="item-name">{item.name}</div>
          <div className="item-phone">{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
