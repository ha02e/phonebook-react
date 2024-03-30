import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div className="search-section">
      <Row>
        <Col lg={10}>
          <Form.Control type="text" placeholder="연락처 검색" size="lg" />
        </Col>
        <Col lg={2}>
          <Button size="lg">검색</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
