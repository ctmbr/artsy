import React from "react";

const sample = [
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
  {
    img: "placeholder",
    name: "placeholder",
    itemPage: "placeholder",
  },
];

export default function Project() {
  return sample.map((project) => (
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
