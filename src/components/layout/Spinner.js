/**
 * @Author: Ali
 * @Date:   2019-10-16T06:33:46+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T06:40:39+02:00
 */
import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <>
    <img
      src={spinner}
      alt="loading"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </>
);
export default Spinner;
