import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { UseDispatch, useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      // payload: { name: name, phoneNumber: phoneNumber },
      payload: { name, phoneNumber },
    });
  };

  return (
    <div className="contact-form-section">
      <Form onSubmit={addContact}>
        <InputGroup className="mb-3" controlId="formName">
          <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            required
            aria-label="formName"
            aria-describedby="basic-addon1"
            size="lg"
            onChange={(event) => setName(event.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3" controlId="formContact">
          <InputGroup.Text id="basic-addon2">전화번호</InputGroup.Text>
          <Form.Control
            type="tel"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="전화번호를 입력해주세요. (010-0000-0000)"
            required
            aria-label="formContact"
            aria-describedby="basic-addon2"
            size="lg"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </InputGroup>
        <Button variant="primary" type="submit" size="lg">
          저장하기
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
