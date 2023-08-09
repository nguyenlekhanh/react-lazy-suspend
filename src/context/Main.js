import React from 'react'
import { UserProvider } from './UserProvider'
import Profile from './Profile'

const Main = () => {
  return (
    <div className="main-content">
      <UserProvider>
        <Profile />
      </UserProvider>
    </div>
  )
}

export default Main