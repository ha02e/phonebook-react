import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
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
          <div className="item-name">이하영</div>
          <div className="item-phone">01011112222</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
