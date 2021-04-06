import React from "react";
// import logo from './logo.svg';
import "./assets/scss/site.scss";
import { Tabs } from "./Tabs";
import { ReactElement } from "react";

function App(): ReactElement {
  return (
    <div className="App">
      <span style={{ display: "none" }}>React Icon System</span>
      <Tabs />
    </div>
  );
}

export default App;
