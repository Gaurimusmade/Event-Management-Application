import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white shadow dark:bg-gray-800 w-full mt-5">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <a
            href="https://eventmangement.com/"
            className="hover:underline"
            aria-label="Event-Management website"
          >
            Event-Management™
          </a>
          . All Rights Reserved.
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
          role="list"
        >
          <li>
            <a
              href="#"
              className="hover:underline me-4 md:me-6"
              aria-label="About us"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline me-4 md:me-6"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline me-4 md:me-6"
              aria-label="Licensing Information"
            >
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline" aria-label="Contact us">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
