import React, { useContext, useState } from 'react'

import { ACTION_TYPES, GlobalData } from './ContextUserReducer'


function Message() {
  const { dispatch, state } = useContext(GlobalData);
  const { message } = state;
  const [messageValue, setMessageValue] = useState();

  const setMessageHandler = () => {
    dispatch({
      type: ACTION_TYPES.MESSAGE,
      payload: {
        message: messageValue,
      },
    });
  }

  return (
    <>
      <input type="text" value={messageValue} onChange={(e) => setMessageValue(e.target.value)}/>
      <button
        onClick={() => setMessageHandler()}
      >SetMessage</button>
    </>
  )
}

export default Message