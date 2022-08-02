import React from "react";
import products from "./products";

export default function Project() {
  return products.map((project) => (
    <section>
      <div>
        <h2>{project.name}</h2>
        <a href={project.liveURL}>
          <img alt="" src={project.img} />
        </a>
        <div>
          <a className="btn" href={project.repoLink}>
            repository
          </a>
        </div>
      </div>
    </section>
  ));
}
