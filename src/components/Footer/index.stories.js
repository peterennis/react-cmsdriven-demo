import React from "react";
import Footer from ".";

import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

export default {
  title: "Footer",
  decorators: [withKnobs]
};

export const BasicFooter = () => {
  return (
   <Footer></Footer>
  );
};
