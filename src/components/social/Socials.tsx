import React from "react";
import { Link } from "react-router-dom";
import Resume from "../../assets/CV_JOHN-MASON.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./social.scss";

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
          <Link
            to="https://linkedin.com/in/mason10396"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <FaLinkedin size={30} />
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/simkidd"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FaGithub size={30} />
            Github
          </Link>
        </li>
        <li>
          <Link to="mailto:johnmsn22@gmail.com" className="mail">
            <HiOutlineMail size={30} />
            Email
          </Link>
        </li>
        {/* <li>
          <a href={Resume} download className="resume">
            <BsFillPersonLinesFill size={30} />
            Resume
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Socials;
