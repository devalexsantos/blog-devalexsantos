import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface UserInfoType {
  name: string
  login: string
  avatar_url: string
  html_url: string
  public_repos: number
  location: string
  bio: string
  company: string
}

interface UserInfoContextType {
  userinfo: UserInfoType
  isLoading: boolean
}

export const UserInfoContext = createContext({} as UserInfoContextType)

interface UserInfoContextProviderProps {
  children: ReactNode
}

export function UserInfoContextProvider({
  children,
}: UserInfoContextProviderProps) {
  const [userinfo, setUserInfo] = useState({} as UserInfoType)
  const [isLoading, setIsLoading] = useState(false)

  async function getUserInfoData() {
    setIsLoading(true)
    const response = await api.get('/users/devalexsantos')
    setUserInfo(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getUserInfoData()
  }, [])

  return (
    <UserInfoContext.Provider value={{ userinfo, isLoading }}>
      {children}
    </UserInfoContext.Provider>
  )
}
