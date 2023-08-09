import React, { createContext, useReducer } from 'react'

export const GlobalData = createContext(undefined);

export const ACTION_TYPES = {
  MESSAGE: "MESSAGE"
} 

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.MESSAGE: {
      return { ...state, message: action.payload.message };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};


const ContextUserReducer = ({children}) => {
  const initialState = {
    message: ""
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalData.Provider value={{ state, dispatch }}>
      {children}
    </GlobalData.Provider>
  );
}

export default ContextUserReducer