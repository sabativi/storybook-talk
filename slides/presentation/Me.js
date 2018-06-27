import React from 'react';
import Iframe from 'react-iframe';
import FullScreen from "./FullScreenSlide";

const Me = () => (
  <FullScreen
    title="About"
    childrenStyle={{ minWidth: 1000, overflowY: "scroll" }}
  >
    <Iframe url="http://reactivic.com" display="initial" position="relative" />
  </FullScreen>
);

export default Me;
