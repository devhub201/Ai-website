import React from "react";
import ReactDOM from "react-dom/client";

function Test() {
  return <h1 style={{color:"white"}}>WORKING</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Test />
);
