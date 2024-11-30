import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './LocalStorage'

export const AuthContext = createContext()

const Context = ({children}) => {
    const [userdata, setuserdata] = useState(null)

    useEffect(() => {
        // localStorage.clear()
        setLocalStorage()
        const {employees} = getLocalStorage()
        setuserdata(employees)
    }, [])
  return (
    <AuthContext.Provider value={userdata} >
      {children}
    </AuthContext.Provider>
  )
}

export default Context
