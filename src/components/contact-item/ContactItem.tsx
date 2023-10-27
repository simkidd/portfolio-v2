import React from "react";
import { styled } from "styled-components";

interface IContactItem {
  icon: any;
  content: string;
}

const ContactItem: React.FC<IContactItem> = ({ icon, content }) => {
  return (
    <Item>
      <div className="left">{icon}</div>
      <div className="right">
        <p>{content}</p>
      </div>
    </Item>
  );
};

export default ContactItem;

const Item = styled.div`
  background: var(--backgroundDarkGrey);
  display: flex;
  align-items: center;

  .left {
    padding: 1rem;
    border: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    svg {
      font-size: 20px;
    }
  }
  .right {
    h6 {
      color: var(--whiteColor);
      font-size: 1rem;
      padding-bottom: 0.5rem;
    }
    p {
      padding: 0.1rem 0;
      font-size: 14px;
    }
  }
`;
