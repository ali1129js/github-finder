/**
 * @Author: Ali
 * @Date:   2019-10-16T10:46:08+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T10:49:19+02:00
 */
import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};
export default Alert;
