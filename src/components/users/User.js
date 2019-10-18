/**
 * @Author: Ali
 * @Date:   2019-10-17T08:25:25+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-18T09:10:20+02:00
 */
import React from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

class User extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;
    const { loading, repos } = this.props;
    if (loading) {
      return <Spinner />;
    }
    return (
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <h1> {name} </h1>
            <p> Location: {location} </p>
          </div>
          <div>
            {" "}
            {bio && (
              <>
                <h3> Bio </h3>
                <p> {bio} </p>{" "}
              </>
            )}{" "}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {" "}
                {login && (
                  <>
                    <strong> Username: </strong>
                    {login}
                  </>
                )}{" "}
              </li>
              <li>
                {" "}
                {company && (
                  <>
                    <strong> Company: </strong>
                    {company}
                  </>
                )}{" "}
              </li>
              <li>
                {" "}
                {blog && (
                  <>
                    <strong> Website: </strong>
                    {blog}
                  </>
                )}{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Follower: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <div>
          <h5 className="text-center"> Latest Repositories: </h5>
          <Repos repos={repos} />
        </div>
      </>
    );
  }
}
export default User;
