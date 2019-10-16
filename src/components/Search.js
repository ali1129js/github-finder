/**
 * @Author: Ali
 * @Date:   2019-10-16T07:46:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T09:42:27+02:00
 */
import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };
  // old :handleChange = e => this.setState({ text: e.target.value });
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Seach github users ..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
export default Search;
