/**
 * @Author: Ali
 * @Date:   2019-10-15T10:47:46+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T06:11:47+02:00
 */
import React from "react";

const Useritem = ({ user: { login, avatar_url, html_url } }) => (
  <div className="card text-center">
    <img
      src={avatar_url}
      alt="avatar"
      className="round-img"
      style={{ width: "60px" }}
    />
    <h3> {login} </h3>
    <div>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  </div>
);
export default Useritem;
