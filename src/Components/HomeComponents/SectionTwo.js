import React, { Suspense } from "react";
import Video from "./Video";
import Img from '../../media/img-2.jpeg';

const SectionTwo = () => {
  return (
    <div className="container-fluid section-two">
      <div className="container">
        <div className="row pt-5 my-3 row-1">
          <div className="col-6 mx-auto">
            <div className="d-flex align-items-center justify-content-around my-2">
              <button className="btn btn-lg">
                <i className="bi bi-chat-square-text-fill"></i> Explain Code
              </button>
              <button className="btn btn-lg disabled">
                Explain Code
              </button>
              <button className="btn btn-lg disabled">
                Explain Code
              </button>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col text-center text-light">
            <h1 className="display-3 fw-semibold">Try the latest AI features!</h1>
            <p className="fs-5 text-dark">
              Start enhancing a range of tasks using AI, from writing emails,
              code, or
              <br /> blogs, to rephrasing paragraph’s you just want to reword!
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-8 mx-auto p-0 text-center">
            <div className="video-div">
              <Suspense fallback={null}>
                <Video />
              </Suspense>
            </div>
            <br />
            <button className="btn btn-lg custom-btn text-light my-3" style={{width:"30%"}}>Try it out</button>
          </div>
        </div>
        <div className="row row-2">
          <div className="col text-center text-light">
            <h1 className="display-3 fw-semibold">Try the latest AI features!</h1>
            <p className="fs-5">
              Start enhancing a range of tasks using AI, from writing emails,
              code, or
              <br /> blogs, to rephrasing paragraph’s you just want to reword!
            </p><br/>
            <div >
                <img alt="" src={Img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
