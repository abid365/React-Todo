import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
const Welcome = () => {
  return (
    <div className="mx-3 my-5 px-5 text-white">
      <div className="container-fluid">
        {/* grid */}
        <div className="row">
          {/* hero text */}
          <div className="col">
            <h1 className="display-3 fw-bolder my-4">
              Supercharge<br></br> Your Productivity
            </h1>
            <p className="fs-6 text-body-secondary my-3 fw-bold">
              Empower Your Day with Our Seamless Todo Experience: Tackle Tasks
              Effortlessly<br></br> and Achieve Success Like Never Before!
              Embrace the Future of<br></br> Productivity and Supercharge Your
              Life!
            </p>
            <div>
              <button className="btn btn-light my-5 border-dark border-3">
                Get Started{" "}
                <BsArrowRightCircle className="fw-bold"></BsArrowRightCircle>
              </button>
            </div>
          </div>
          {/* hero image */}
          <div className="col">
            <img
              className="img-fluid"
              src="/src/assets/you-did-it.png"
              alt=""
            />
          </div>
          {/* bottom box section */}
        </div>
        <div className="container-fluid">
          <div className="border border-3 border-dark p-3 bg-light row">
            <div className="col">
              <h1 className="fs-5 fw-bold mt-4 text-black">
                Manage your task with the help of our task management
                application 👦🏽
              </h1>
            </div>
            <div className="col">
              <h1 className="text-black fw-bold fs-5 mt-4">
                Embrace timeliness and let your actions shine brightly! 🕰️
              </h1>
            </div>
            <div className="col">
              <h1 className="text-black fw-bold fs-5 mt-4">
                Fuel your dreams with every decision you make! 🚀
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
