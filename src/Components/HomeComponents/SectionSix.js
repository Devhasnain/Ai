import React from "react";
import UlItems from "../../Context/UlItems";
import ImgOne from "../../media/img-3.png";

const SectionSix = () => {
  return (
    <div className="container-fluid section-six ">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 col-xl-5 col-10 mx-auto">
            <div className="">
              <img alt="" src={ImgOne} className='card-img' />
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col mx-auto p-0">
            <h2 className="fw-semibold">All the tools</h2>
            <p className="">
              No longer have trouble with code you can't debug.
              <br /> Try the code fixer before you jump onto
              <br /> StackOverflow.
            </p>
            <br />
            <UlItems a={1} b={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
