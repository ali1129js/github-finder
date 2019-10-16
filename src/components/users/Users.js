/**
 * @Author: Ali
 * @Date:   2019-10-16T06:15:12+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T06:30:59+02:00
 */
import React, { Component } from "react";
import Useritem from "./Useritem";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
export default Users;
