import React from "react";
import "./contact.scss";
import Title from "../../components/title/Title";
import ContactItem from "../../components/contact-item/ContactItem";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import Map from "../../components/map/Map";
import { MdLocationOn } from "react-icons/md";
import ContactForm from "../../components/form/ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="main__layout">
        <div>
          <Title title="Contact" span="Contact" />
          <p className="subtitle">// Shoot me an email - myemail@gmail.com</p>
        </div>
        <Map />
        {/* <div className="contact__title"><h4>Get In Touch</h4></div> */}
        <div className="inner__layout">
          <div className="contact__inner">
            <div className="inner__left">
              <ContactItem
                icon={<HiPhone />}
                title="Phone"
                content="+234 7033101706"
              />
              <ContactItem
                icon={<HiOutlineMail />}
                title="E-mail"
                content="johnmsn22@gmail.com"
              />
              <ContactItem
                icon={<MdLocationOn />}
                title="Location"
                content="Port Harcourt, Rivers, Nigeria"
              />
            </div>
            <div className="inner__right">
              <ContactForm />
            </div>
          </div>

          <ul className="social__icons">
            <li>
              <Link
                to="https://linkedin.com/in/mason10396"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/simkidd"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
