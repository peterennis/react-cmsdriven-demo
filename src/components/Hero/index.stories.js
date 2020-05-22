import React from "react";
import Hero from ".";

import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

export default {
  title: "Hero",
  decorators: [withKnobs({
    escapeHTML: false,
  })]
};

export const BasicHero = () => {
  return (
    <Hero
      title={text("title", "Elegant e-shop")}
      paragraph={text("paragraph", "<h3>This is a shop made in react, storybook and cmsdriven</h3>")}
      firstCTA={text("firstCTA", "Book a call")}
      secondCTA={text("secondCTA", "Learn more")}></Hero>
  );
};
