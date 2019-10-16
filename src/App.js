/**
 * @Author: Ali
 * @Date:   2019-10-15T10:11:50+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T06:28:12+02:00
 */

import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("http://api.github.com/users");
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github-Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
