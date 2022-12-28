import React from "react";
import { NavLink } from "react-router-dom";
import { MyTypewriter } from "./MyTypewriter";
import Img from "../../media/code.jpeg";
const SectionOne = () => {
  return (
    <div className="container-fluid section-one">
      <div className="container-lg">
        <div className="row">
          <div className="col text-center">
            <MyTypewriter />
            <p className="text-muted my-2">
              Now you can <b>enhance everything you do</b> with the latest AI
              tools to
              <br />
              solve problems, write solutions and make life easier.
            </p>
            <NavLink to="/" className="btn btn-lg custom-btn text-light my-3" style={{minWidth:"18%"}}>
              Get Started
            </NavLink>
          </div>
        </div>
        <div className="row border my-card p-4 my-5 bg-light">
          <div className="col-lg-5 col-md-6 col-12 mx-auto p-0 pt-4">
            <h3 className="fw-semibold my-2">
              <i className="bi bi-chat-square-text pt-1"></i> Explain Code
            </h3>
            <p className="text-muted">
              Explain some code based on the syntax provided
            </p>
            <br />
            <h5 className="fw-semibold">Paste your code below</h5>
            <div className="code-div p-3 rounded my-3">
              <img alt="" src={Img} />
            </div>
            <NavLink to="/" className="btn explain-code btn-lg my-2">
              Use AI to explain code
            </NavLink>
          </div>
          <div className="col-lg-5 col-md-6 col-12 mx-auto border-start pt-3">
            <div
              className="mx-3 "
              style={{ width: "100%", position: "relative", height: "100%" }}
            >
              <div className="d-flex">
                <div>
                  <i
                    style={{ fontSize: "50px" }}
                    className="bi bi-arrow-right-circle-fill"
                  ></i>
                </div>
                <div className="mx-3">
                  <h4 className="fw-semibold">What does this code do?</h4>
                  <p className="text-muted">The following code does:</p>
                </div>
              </div>
              <div className="copy-output">
                <button
                  className="btn btn-lg btn-light mx-auto"
                  style={{ width: "100%" }}
                >
                  Copy Output
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
