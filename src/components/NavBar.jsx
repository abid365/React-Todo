import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Nav className="bg-dark py-3 px-5 mx-3 text-light d-flex flex-row justify-content-between align-items-center rounded-4">
        <div>
          <a href="" className="fs-3 text-light text-decoration-none fw-bolder">
            Brand
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
