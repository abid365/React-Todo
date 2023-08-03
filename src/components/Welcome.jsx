import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
const Welcome = () => {
  return (
    <div className="mx-3 my-5 px-5 text-white">
      <div className="d-flex flex-column">
        <h1 className="display-3 fw-bolder my-4">
          Supercharge<br></br> Your Productivity
        </h1>
        <p className="fs-6 text-body-secondary my-3">
          Empower Your Day with Our Seamless Todo Experience: Tackle Tasks
          Effortlessly<br></br> and Achieve Success Like Never Before! Embrace
          the Future of<br></br> Productivity and Supercharge Your Life!
        </p>
        <div>
          <button className="btn btn-light my-4 border-dark border-3">
            Get Started{" "}
            <BsArrowRightCircle className="fw-bold"></BsArrowRightCircle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
