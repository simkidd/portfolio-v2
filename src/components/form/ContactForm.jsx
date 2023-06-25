import React, { useRef } from "react";
import Button from "../buttons/Button";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SiMinutemailer } from "react-icons/si";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <InputField>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </InputField>
      <InputField>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" />
      </InputField>
      <InputField>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" />
      </InputField>
      <InputField>
        <label htmlFor="message">Message</label>
        <textarea type="text" id="message" cols="30" rows="10" />
      </InputField>
      <InputField>
        <Button type="submit" className="btn">
          Let's Connect
          <SiMinutemailer size={18} />
        </Button>
      </InputField>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InputField = styled.div`
  width: 100%;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  label {
    position: absolute;
    left: 10px;
    top: -12px;
    display: inline-block;
    background: #10121a;
    padding: 0 0.5rem;
    color: inherit;
  }
  input {
    border: 1px solid #333;
    background: transparent;
    padding: 0 15px;
    height: 50px;
    width: 100%;
    outline: none;
    color: inherit;
  }
  textarea {
    background: transparent;
    border: 1px solid #333;
    outline: none;
    width: 100%;
    color: inherit;
    padding: 0.8rem 1rem;
    resize: none;
  }
  .btn {
    padding: 0.75rem;
    svg {
      margin-left: 0.5rem;
    }
  }
`;
