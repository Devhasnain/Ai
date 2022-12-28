import React from "react";
import UlItems from "../../Context/UlItems";
import ImgOne from "../../media/img-5.png";
import ImgTwo from "../../media/img-6.png";

const SectionFive = () => {
  return (
    <div className="container-fluid section-five">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-lg-5 mx-auto col-xl">
            <h2 className="fw-semibold">Writing tools</h2>
            <p className="">
              No longer have trouble with code you can't debug.
              <br /> Try the code fixer before you jump onto
              <br /> StackOverflow.
            </p>
            <br />
            <UlItems a={5} b={10} />
          </div>
          <div className="col-lg-5 mx-auto col-xl-5 col p-0">
              <img alt="" src={ImgOne} />
              <img alt="" src={ImgTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
