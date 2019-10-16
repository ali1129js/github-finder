/**
 * @Author: Ali
 * @Date:   2019-10-15T10:11:50+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T10:52:33+02:00
 */

import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/Search";
import Alert from "./components/layout/Alert";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ users: [], loading: false });
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar title="Github-Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
