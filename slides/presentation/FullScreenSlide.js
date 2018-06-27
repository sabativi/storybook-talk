import React from "react";
import PropTypes from "prop-types";
import { Heading } from "spectacle";

const fullScreenStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  top: "calc(-50vh + 50%)",
  left: "calc(-50vw + 50%)",
  position: "absolute",
  width: "100vw",
  height: "100vh",
  padding: "10vh 10vw"
};

const FullScreenSlide = ({ children, title, childrenStyle }) => (
  <div style={fullScreenStyle}>
    <div style={{ width: 1000 }}>
      <Heading
        size={4}
        caps
        lineHeight={1}
        textColor="secondary"
        style={{ marginBottom: ".5em" }}
      >
        {title}
      </Heading>
    </div>
    <div
      style={{ flex: 1, width: "100%", position: "relative", ...childrenStyle }}
    >
      {children}
    </div>
  </div>
);

FullScreenSlide.propTypes = {
  childrenStyle: PropTypes.object,
  title: PropTypes.string
};

export default FullScreenSlide;
