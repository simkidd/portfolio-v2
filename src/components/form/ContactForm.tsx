import React, { useRef } from "react";
import Button from "../buttons/Button";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SiMinutemailer } from "react-icons/si";
import { config } from "../../utils/config";


const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          config.SERVICE_ID,
          config.TEMPLATE_ID,
          form.current,
          config.PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
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
        <textarea id="message" cols={30} rows={10} />
      </InputField>
      <InputField>
        <Button type="submit" className="btn">
          <p>
            Let's Connect
            <SiMinutemailer size={18} />
          </p>
        </Button>
      </InputField>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InputField = styled.div`
  width: 100%;
  position: relative;
 

  label {
    position: absolute;
    left: 10px;
    top: -10px;
    display: inline-block;
    background: var(--backgroundDarkColor);
    padding: 0 0.2rem;
    color: inherit;
    font-size: 14px;
  }
  input {
    border: 1px solid var(--borderColor);
    background: transparent;
    padding: 0 15px;
    height: 50px;
    width: 100%;
    outline: none;
    color: inherit;
    font-family: 'Nunito', sans-serif;

    &:focus{
      border: 1px solid var(--primaryColor);
    }
  }
  textarea {
    background: transparent;
    border: 1px solid var(--borderColor);
    outline: none;
    width: 100%;
    color: inherit;
    padding: 0.8rem 1rem;
    resize: none;
    font-family: 'Nunito', sans-serif;

    &:focus{
      border: 1px solid var(--primaryColor);
    }
  }

  p {
    display: flex;
    padding: 0.75rem;
    align-items: center;
    color: var(--whiteColor);
    z-index: 2;
    svg {
      margin-left: 0.5rem;
    }
  }

  .btn{
    margin: 0;
  }
`;
