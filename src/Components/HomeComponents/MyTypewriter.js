import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const MyTypewriter = () => {
  return (
    <>
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
        className='text-center display-3 fw-semibold my-3'
      >
        Life is simple{" "}
        <span style={{ color: "cyan", fontWeight: "bold" }}>
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </>
  );
};

// export default MyTypewriter;
