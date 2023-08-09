import React, { useContext } from 'react'
import { UserContext, UserDispatchContext } from './UserProvider';
import { GlobalData } from './ContextUserReducer';

const Profile = () => {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  // const { state } = useContext(GlobalData);
  // const { message } = state;

  return (
    <>
      <h1> {userDetails.username} </h1>
      {/* <h1> {message} </h1> */}
    </>
  );
}

export default Profile