import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

// Create context with default value
export const AuthContext = createContext({
  userData: null,
  setUserData: () => {}
})

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // If this is meant to set default data, pass that data explicitly
    // Example: setLocalStorage({ employees: defaultData }) if needed
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
