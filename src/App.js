/**
 * @Author: Ali
 * @Date:   2019-10-15T10:11:50+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-17T11:03:18+02:00
 */

import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user:{},
    contributions:null,
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
  // Get single github user
  getUser = async (username) => {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({user:res.data,loading:false})
  }
  
  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });
  //Set alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users,user, loading, alert } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github-Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getContributions={this.getContributions}
                  user={user}
                  loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
