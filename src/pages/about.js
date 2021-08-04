import React, { Fragment } from "react";

import Hero from "../components/about/hero";
import History from "../components/about/history";
import Description from "../components/about/description";
import Ubication from "../components/ubication";
import Contact from "../components/contact";
import Stats from "../components/about/stats";

export default () => {
  return (
    <Fragment>
      <Hero />
      <History />
      <Description />
      {/*<Ubication />*/}
      <Stats />
      <Contact />
    </Fragment>
  );
};
