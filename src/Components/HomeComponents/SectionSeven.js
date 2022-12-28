import React from "react";
import CommentsMap from "./CommentsMap";

const SectionSeven = () => {
  return (
    <div className="container-fluid section-seven">
      <div className="container">
        <div className="row row-1">
          <div className="col text-center">
            <h1 className="display-3 fw-semibold">What are people saying?</h1>
            <p className="fs-5">
            Enhance AI was <b> tested by  developers </b> in the community, on twitter, facebook and<br/> youtube and here is what they had to say!
            </p>
          </div>
        </div>
        <div className="row">
            <CommentsMap/>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
