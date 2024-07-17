import { createContext, useState, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import axios from 'axios'
import { setAuthToken } from '../util/api'

const AuthContext: any = createContext('')

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useLocalStorage('user', null)
    const [loading, setLoading] = useState(false)
    const [_, setInitialLoading] = useState(true)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user') ?? '')
        if (storedUser && storedUser.accessToken) {
            setAuthToken(storedUser.accessToken)
            setUser(storedUser)
        }
        setInitialLoading(false)
    }, [])

    const login = async (email: any, password: any) => {
        setLoading(true)
        try {
            const response: any = await axios.post('http://localhost:5086/identity/login', { email, password })
            setUser(response.data)
            setAuthToken(response.data.accessToken)
        } catch (error) {
            console.error('Login failed:', error)
        } finally {
            setLoading(false)
        }
    }

    const register = async (email: any, password: any) => {
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:5086/identity/register', { email, password })
            setUser(response.data)
            setAuthToken(response.data.accessToken)
        } catch (error) {
            console.error('Registration failed:', error)
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setAuthToken("")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): any => {
    return useContext(AuthContext)
}