import React from "react";
import { styled } from "styled-components";

const ContactItem = ({ icon, title, content }) => {
  return (
    <Item>
      <div className="left">{icon}</div>
      <div className="right">
        <h6>{title}</h6>
        <p>{content}</p>
      </div>
    </Item>
  );
};

export default ContactItem;

const Item = styled.div`
  background: #333;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .left {
    padding: 1.5rem;
    border: 1px solid #555;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    svg {
      font-size: 1.5rem;
    }
  }
  .right {
    h6 {
      color: #fff;
      font-size: 1rem;
      padding-bottom: 0.5rem;
    }
    p {
      padding: 0.1rem 0;
      font-size: 14px;
    }
  }
`;
