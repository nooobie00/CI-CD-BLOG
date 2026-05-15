import React, { createContext, useContext, useReducer } from 'react'

import messageReducer from './messageReducer'
import userReducer from './userReducer'

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [message, dispatchMessage] = useReducer(messageReducer, null)
  const [user, dispatchUser] = useReducer(userReducer, null)

  const value = {
    message: [message, dispatchMessage],
    user: [user, dispatchUser],
  }
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export const MessageContext = () => {
  return useContext(AppContext).message
}
export const MessageContextData = () => {
  return useContext(AppContext).message[0]
}
export const MessageContextDispatch = () => {
  return useContext(AppContext).message[1]
}

export const UserContext = () => {
  return useContext(AppContext).user
}
export const UserContextData = () => {
  return UserContext()[0]
}
export const UserContextDispatch = () => {
  return UserContext()[1]
}

export default AppContext
