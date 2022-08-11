import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 80, clear: "both", paddingTop: 30, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
