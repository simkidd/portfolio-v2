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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };
  const itemVariants1 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 1 } },
  };
  const itemVariants2 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 1.5 } },
  };
  const itemVariants3 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.1, delay: 2 } },
  };
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.5 } },
  };
  const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.7 } },
  };

  return (
    <div className="contact">
      <div className="main__layout">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="contact__wrap"
        >
          <motion.div variants={titleVariants}>
            <Title title="Contact" span="Contact" />
            <p className="subtitle">// Shoot me an email - myemail@gmail.com</p>
          </motion.div>
          {/* google map */}
          <motion.div
            variants={mapVariants}
            initial="hidden"
            animate="visible"
          >
            <Map />
          </motion.div>

          <div className="inner__layout">
            <div className="contact__inner" >
              <div className="inner__left">
                <motion.div
                  variants={itemVariants1}
                  initial="hidden"
                  animate="visible"
                >
                  <ContactItem
                    icon={<HiPhone />}
                    content="+234 7033101706"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants2}
                  initial="hidden"
                  animate="visible"
                >
                  <ContactItem
                    icon={<HiOutlineMail />}
                    content="johnmsn22@gmail.com"
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants3}
                  initial="hidden"
                  animate="visible"
                >
                  <ContactItem
                    icon={<MdLocationOn />}
                    content="Port Harcourt, Rivers, Nigeria"
                  />
                </motion.div>

              </div>
              <div className="inner__right">
                {/* contact form */}
                <motion.div variants={formVariants}>
                  <ContactForm />
                </motion.div>
              </div>
            </div>

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
