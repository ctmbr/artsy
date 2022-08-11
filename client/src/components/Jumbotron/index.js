import React from "react";
import "./style.css";

function Jumbotron({ children })
{
  return (
    <div
      style={{ height: 80, clear: "Both", textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
