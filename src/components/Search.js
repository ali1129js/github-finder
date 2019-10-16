/**
 * @Author: Ali
 * @Date:   2019-10-16T07:46:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T10:42:03+02:00
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
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
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
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
export default Search;
