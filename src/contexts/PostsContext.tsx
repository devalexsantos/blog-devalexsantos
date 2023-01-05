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
  totalCount: number
  posts: PostsType[]
  isLoading: boolean
  getSearchPosts: (query: string) => Promise<void>
}

export const PostsContext = createContext({} as createContextType)

interface PostsContextProviderProps {
  children: ReactNode
}

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostsType[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  async function getPosts() {
    setIsLoading(true)
    const response = await api.get(
      '/search/issues?q=%20repo:devalexsantos/devalexsantos.com.br',
    )
    setTotalCount(response.data.total_count)
    setPosts(response.data.items)
    setIsLoading(false)
  }

  async function getSearchPosts(query: string) {
    setIsLoading(true)
    const response = await api.get(
      `/search/issues?q=${query}%20repo:devalexsantos/devalexsantos.com.br`,
    )

    setTotalCount(response.data.total_count)
    setPosts(response.data.items)
    setIsLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostsContext.Provider
      value={{ posts, totalCount, isLoading, getSearchPosts }}
    >
      {children}
    </PostsContext.Provider>
  )
}
