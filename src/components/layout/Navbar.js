/**
 * @Author: Ali
 * @Date:   2019-10-15T10:25:36+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-17T08:37:40+02:00
 */
import React from "react";
import { Link } from 'react-router-dom'

const Navbar = ({ title, icon }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon} /> {title}
    </h1>
    <ul>
      <li> <Link to='/'> Home</Link></li>
      <li> <Link to='/About' >About</Link> </li>
    </ul>
  </nav>
);
export default Navbar;
