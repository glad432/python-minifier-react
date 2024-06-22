import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-black text-xs md:text-sm bg-black text-center text-white">
      <div className="pt-9">
        <div className="mb-9 flex justify-center">
          <a
            href="https://gladw-in.github.io/"
            target="_blank"
            rel="noreferrer"
            className="mr-9 text-neutral-200 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faGlobe} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/glad432/"
            target="_blank"
            rel="noreferrer"
            className="mr-9 text-neutral-200 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://github.com/gladw-in"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-200 hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
      </div>
      <div className="bg-neutral-300 p-4 text-center bg-neutral-700 text-neutral-200">
        &copy; GLAD432{" "}
        <span id="year" className="text-neutral-400">
          {currentYear}
        </span>
        <span className="text-neutral-400"> All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
