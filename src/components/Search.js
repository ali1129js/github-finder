/**
 * @Author: Ali
 * @Date:   2019-10-16T07:46:29+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-20T09:48:38+02:00
 */
import React, { useState,useContext } from "react";
import GithubContext from '../../context/github/githubContext'

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext)
  const [text, setText] = useState("");

  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
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
};
export default Search;
