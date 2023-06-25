import React from "react";
import "./home.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button";

const Home = () => {
  return (
    <div className="home">
      <div className="main__layout home">
        <div className="home__container">
          <p className="greetings">
            Hi, I<span>'</span>m
          </p>
          <h1 className="name">John Mason</h1>
          <h2>
            I'm a<span> Frontend Developer</span>
          </h2>
          <p className="text">
            I'm a frontend developer specialiizng in building (and occasionally
            designing) exceptional digital experience. I'm currently focused on
            building responsive frontend of web applications.
          </p>
          <Button>
            <Link to="/works">
              View Work
              <HiArrowNarrowRight style={{ marginLeft: "0.75rem" }} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
