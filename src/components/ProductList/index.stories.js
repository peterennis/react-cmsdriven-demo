import React from "react";
import ProductList from ".";

import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  array
} from "@storybook/addon-knobs";

export default {
  title: "ProductList",
  decorators: [withKnobs({
    escapeHTML: false,
  })]
};

export const BasicProductList = () => {

  return <ProductList
    products={object('products', [{
      title: "Smart Watch",
      paragraph: "The best <b>smart watch</b> of the market",
      imageTitle: "watch",
      image: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-5_large.png?format=jpg&quality=90&v=1530129458",
      ctaTitle: "Buy with 20% off"
    }, {
      title: "Smart Shoe",
      paragraph: "The best <b>smart shoe</b> of the market",
      imageTitle: "shoe",
      image: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-product-2_large.png?format=jpg&quality=90&v=1530129318",
      ctaTitle: "Buy now"
    }])}></ProductList>;
};


