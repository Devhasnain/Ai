import React from "react";
import MyVideo from "../../media/video.webm";
const Video = () => {
  return (
    <video autoPlay={true} width="100%" className="shadow" height="100%" loop={true} style={{padding:"0px",borderRadius:"30px"}}>
      <source src={MyVideo} />
    </video>
  );
};

export default Video;
