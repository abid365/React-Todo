import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Nav className="bg-dark py-2 px-4 text-light d-flex flex-row justify-content-between align-items-center border-top border-bottom border-3 border-warning shadow-lg">
        <div>
          <a
            href="#"
            className="fs-3 text-white text-decoration-none fw-bolder"
          >
            <img src="/src/assets/to-do-list.png" alt="Brand Icon" />
          </a>
        </div>
        <div className="d-flex gap-4">
          <a className="text-decoration-none text-light" href="">
            Link1
          </a>
          <a className="text-decoration-none text-light" href="">
            Link2
          </a>
          <a className="text-decoration-none text-light" href="">
            Link3
          </a>
        </div>
      </Nav>
    </div>
  );
};

export default NavBar;
