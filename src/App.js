/**
 * @Author: Ali
 * @Date:   2019-10-15T10:11:50+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-15T10:40:32+02:00
 */

import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
