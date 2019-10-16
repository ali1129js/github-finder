/**
 * @Author: Ali
 * @Date:   2019-10-16T06:15:12+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-16T06:41:15+02:00
 */
import React from "react";
import Useritem from "./Useritem";
import Spinner from "../layout/Spinner";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
export default Users;
