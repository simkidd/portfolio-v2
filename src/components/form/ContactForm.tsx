import React, { useEffect, useRef, useState } from "react";
import Button from "../buttons/Button";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { SiMinutemailer } from "react-icons/si";
import { config } from "../../utils/config";
import { FaTimes } from "react-icons/fa";


const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const closeNotification = () => {
    setSuccess(false);
    setError(false);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        setLoading(true);
        const res = await emailjs.sendForm(
          config.SERVICE_ID,
          config.TEMPLATE_ID,
          form.current,
          config.PUBLIC_KEY
        );
        console.log(res.text)
        setSuccess(true)
      } catch (error: any) {
        console.error(error.text)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
  };

  // Automatically close the notification after a delay
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => 
      closeNotification(), 3000); 
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  return (
    <>
      {success && (
        <Notification className="show success">
          Message sent successfully!
          <span onClick={closeNotification}>
            <FaTimes />
          </span>
        </Notification>
      )}
      {error && (
        <Notification className="show error">
          Message Failed. Please try again.
          <span onClick={closeNotification}>
            <FaTimes />
          </span>
        </Notification>
      )}

      <Form ref={form} onSubmit={sendEmail}>
        <InputField>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
          />
        </InputField>
        <InputField>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
          />
        </InputField>
        <InputField>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="user_subject"
            required
          />
        </InputField>
        <InputField>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols={30}
            rows={10}
            required
          />
        </InputField>
        <InputField>
          <Button type="submit" className="btn">
            <p>
              {loading ? "Sending..." : "Let's Connect"}
              <SiMinutemailer size={18} />
            </p>
          </Button>
        </InputField>
      </Form>
    </>
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

const Notification = styled.div`
  position: fixed;
  color: #fff;
  padding: 16px 18px;
  z-index: 99;
  transition: all 0.9s ease-in-out;
  display: flex;
  align-items: center;
  opacity: 0;
  &.success{
    background: #007bff;
  }
  &.error{
    background: #970303d6;
  }
  
  span{
    display: flex;
    cursor: pointer;
    margin-left: 10px;
  }
  
  &.show {
    right: 50%;
    transform: translateX(50%);
    top: 16px;
    opacity: 1;
  }
`;

