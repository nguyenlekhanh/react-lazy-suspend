import React, { useContext } from 'react'

import { GlobalData } from './ContextUserReducer'


function ShowMessage() {
  const { state } = useContext(GlobalData);
  const { message } = state;

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default ShowMessage