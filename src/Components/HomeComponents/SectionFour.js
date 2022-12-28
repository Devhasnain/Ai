import React from "react";
import UlItems from "../../Context/UlItems";
import ImgOne from "../../media/img-1.png";
import ImgTwo from "../../media/img-4.png";

const SectionFour = () => {
  return (
    <div className="container-fluid section-four">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-5 col-xl-5 col-10 mx-auto">
              <img alt="" src={ImgOne} />
              <img alt="" src={ImgTwo} />
          </div>
          <div className="col-lg-6 col-xl-6 col mx-auto p-0">
            <h2 className="fw-semibold">Coding tools</h2>
            <p className="">
              No longer have trouble with code you can't debug.<br/> Try the code
              fixer before you jump onto<br/> StackOverflow.
            </p><br/>
            <UlItems a={5} b={10}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
