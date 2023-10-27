import React from "react";
import './title.scss'

interface ITitle {
  title: string;
  span: string;
}

const Title: React.FC<ITitle> = ({ title, span }) => {
  return (
    <div className="title__wrap">
      <p>
        {title} <span>{span}</span>
      </p>
    </div>
  );
};

export default Title;
