import React, { useContext } from 'react'
import { UserContext, UserDispatchContext } from './UserProvider';

const Profile = () => {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  return (
    <h1> {userDetails.username} </h1>
  );
}

export default Profile