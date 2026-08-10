import { useState } from 'react'
import { AuthContext } from './authContext'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        setLocalStorage()
        const { employees } = getLocalStorage()
        return employees
    })

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider