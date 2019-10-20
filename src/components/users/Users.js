/**
 * @Author: Ali
 * @Date:   2019-10-20T10:34:14+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-20T10:34:14+02:00
 */

import React, { useContext } from 'react';
import UserItem from './Useritem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
