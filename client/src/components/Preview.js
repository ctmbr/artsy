import React from "react";

import products from "./Products";

export default function Preview() {
  return products.map((product) => (
    <section>
      <h2>{product.name}</h2>
      <img alt={product.name} src={product.img} />
      <h2>{product.price}</h2>
    </section>
  ));
}
