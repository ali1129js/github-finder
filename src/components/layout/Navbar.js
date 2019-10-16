/**
 * @Author: Ali
 * @Date:   2019-10-15T10:25:36+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T06:31:36+02:00
 */
import React from "react";

const Navbar = ({ title, icon }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon} /> {title}
    </h1>
  </nav>
);
export default Navbar;
