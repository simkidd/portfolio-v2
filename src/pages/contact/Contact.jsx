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
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="contact">
      <div className="main__layout">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <Title title="Contact" span="Contact" />
            <p className="subtitle">// Shoot me an email - myemail@gmail.com</p>
          </div>
          <Map />

          <div className="inner__layout">
            <motion.div className="contact__inner" variants={itemVariants}>
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
            </motion.div>

            <motion.ul
              className="social__icons"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
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
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
