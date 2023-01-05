import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface LabelsType {
  name: string
}

interface PostsType {
  id: string
  html_url: string
  title: string
  user: {
    login: string
  }
  labels: LabelsType[]
  created_at: string
  body: string
}

interface createContextType {
  posts: PostsType[]
}

export const PostsContext = createContext({} as createContextType)

interface PostsContextProviderProps {
  children: ReactNode
}

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostsType[]>([])

  async function getPosts() {
    const response = await api.get(
      '/search/issues?q=%20repo:devalexsantos/devalexsantos.com.br',
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}
