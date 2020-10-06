import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./styles.css";
import logo from './sydor_logo.png'

function App() {
  return (
    <div id="App" className="App">
      <div id="logo">
        <a href="https://sydortechnologies.com/">
          <img src={logo} alt="Sydor Technologies" />
        </a>
      </div>
      <div>
      <SwaggerUI url="sydor.yml" />
      </div>
    </div>
  );
}

export default App;
