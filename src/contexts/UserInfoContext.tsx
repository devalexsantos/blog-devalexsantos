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
}

export const UserInfoContext = createContext({} as UserInfoContextType)

interface UserInfoContextProviderProps {
  children: ReactNode
}

export function UserInfoContextProvider({
  children,
}: UserInfoContextProviderProps) {
  const [userinfo, setUserInfo] = useState({} as UserInfoType)

  async function getUserInfoData() {
    const response = await api.get('/users/devalexsantos')
    setUserInfo(response.data)
  }

  useEffect(() => {
    getUserInfoData()
  }, [])

  return (
    <UserInfoContext.Provider value={{ userinfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}
