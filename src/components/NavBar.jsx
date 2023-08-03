import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Nav className="bg-light py-3 px-4 mx-3 text-light d-flex flex-row justify-content-between align-items-center rounded-4 border border-3 border-dark shadow-lg">
        <div>
          <a href="" className="fs-3 text-dark text-decoration-none fw-bolder">
            Brand
          </a>
        </div>
        <div className="d-flex gap-4">
          <a className="text-decoration-none text-dark" href="">
            Link1
          </a>
          <a className="text-decoration-none text-dark" href="">
            Link2
          </a>
          <a className="text-decoration-none text-dark" href="">
            Link3
          </a>
        </div>
      </Nav>
    </div>
  );
};

export default NavBar;
