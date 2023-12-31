import React from 'react'
import { UserProvider } from './UserProvider'
import Profile from './Profile'
import ContextUserReducer from './ContextUserReducer'
import Message from './Message'
import ShowMessage from './ShowMessage'

const Main = () => {
  return (
    <div className="main-content">
      <UserProvider>
          <Profile />
      </UserProvider>
      <ContextUserReducer>
        <Message />
        <ShowMessage />
      </ContextUserReducer>
    </div>
  )
}

export default Main