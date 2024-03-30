import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { keyword } });
  };

  return (
    <div className="search-section">
      <Form onSubmit={searchByName}>
        <Row>
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="검색하실 이름을 입력해주세요."
              size="lg"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button type="submit" size="lg">
              검색
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
