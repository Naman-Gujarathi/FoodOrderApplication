import React from "react";
import ReactDOM from "react-dom/client";
import {Header}  from "./components/Header.jsx";
import Body from "./components/Body.js";

const AppLayout = () => {
 
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);

