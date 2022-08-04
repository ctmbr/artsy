import React from "react";
import products from "./products";

export default function Project() {
  return products.map((product) => (
    <section>
      <div>
        <h2>{product.name}</h2>
        <a href={product.liveURL}>
          <img alt="" src={product.img} />
        </a>
        <div>
          <a className="btn" href={product.repoLink}>
            repository
          </a>
        </div>
      </div>
    </section>
  ));
}
