import React, { Fragment } from "react";

import Hero from "../components/home/hero";
import Properties from "../components/home/properties";
import About from "../components/home/about";
import OfficeInfo from "../components/home/office-info";
import Contact from "../components/contact";
import Review from "../components/home/review";

export default () => {
  return (
    <Fragment>
      <Hero />
      <Properties />
      {/*<OfficeInfo />
      <About />
      <Review />
  <Contact />*/}
    </Fragment>
  );
};
