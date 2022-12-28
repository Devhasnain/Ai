import React from "react";
import Data from "../../Context/Comments.json";
const CommentsMap = () => {
  return (
    <>
      {Data.slice(0,9).map((item, index) => {
        return <div className="col-4 mx-auto my-3 review-cards p-2" key={index}>
            <h4>{item.name}</h4>
            <span className="">{item.body.length>80?item.body.slice(0,80):item.body}</span><br/>
            <small>{item.email}</small>
        </div>;
      })}
    </>
  );
};

export default CommentsMap;
