import React from 'react'
import { UserProvider } from './UserProvider'
import Profile from './Profile'
import ContextUserReducer from './ContextUserReducer'
import Message from './Message'
import ShowMessage from './ShowMessage'

const Main1 = () => {
  return (
    <div className="main-content">
      <ContextUserReducer>
        <ShowMessage />
      </ContextUserReducer>
    </div>
  )
}

export default Main1