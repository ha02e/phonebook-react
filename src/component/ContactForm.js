import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div>
      <Form>
        <InputGroup className="mb-3" controlId="formName">
          <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            aria-label="formName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3" controlId="formContact">
          <InputGroup.Text id="basic-addon2">전화번호</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요."
            aria-label="formContact"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          저장하기
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;