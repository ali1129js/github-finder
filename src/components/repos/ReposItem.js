/**
 * @Author: Ali
 * @Date:   2019-10-18T08:59:53+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-18T09:02:15+02:00
 */
import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        {" "}
        <a href={repo.html_url}>{repo.name}</a>{" "}
      </h3>
    </div>
  );
};
export default RepoItem;
