import React from "react";
import Product from ".";

import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Product",
  decorators: [
    withKnobs({
      escapeHTML: false
    })
  ]
};

export const BasicProductList = () => {
  return (
    <div style={{ width: '350px', height: "200px" }}>
      <Product
        title={text("heading", "Smart shoe")}
        paragraph={text(
          "paragraph",
          "<h1>The best smart shoe of the market</h1>"
        )}
        image={text(
          "image",
          "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?format=jpg&quality=90&v=1530129318"
        )}
        imageTitle={text("imageTitle", "Shoe")}
        ctaTitle={text("ctaTitle", "Buy now")}
      ></Product>
    </div>
  );
};
