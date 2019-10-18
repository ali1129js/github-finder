/**
 * @Author: Ali
 * @Date:   2019-10-18T08:57:35+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-18T09:05:08+02:00
 */
import React from "react";
import RepoItem from "./ReposItem";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};
export default Repos;
