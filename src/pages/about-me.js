import React, { Fragment } from "react";

import Hero from "../components/about-me/hero";
import History from "../components/about-me/history";
import Contact from "../components/contact";

export default () => {
  return (
    <Fragment>
      <Hero />
      <History />
      <Contact />
    </Fragment>
  );
};
