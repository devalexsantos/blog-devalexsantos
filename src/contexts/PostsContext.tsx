import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface LabelsType {
  name: string
  color: string
}

interface PostsType {
  id: string
  html_url: string
  title: string
  number: string
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
  isFilter: boolean
  categories: string[]
  getSearchPosts: (query: string) => Promise<void>
  filterPostsByTag: (name: string) => void
}

export const PostsContext = createContext({} as createContextType)

interface PostsContextProviderProps {
  children: ReactNode
}

export function PostsContextProvider({ children }: PostsContextProviderProps) {
  const [posts, setPosts] = useState<PostsType[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFilter, setIsFilter] = useState(false)

  async function getPosts() {
    setIsLoading(true)
    const response = await api.get(
      '/search/issues?q=%20repo:devalexsantos/blog-devalexsantos',
    )
    setTotalCount(response.data.total_count)
    setPosts(response.data.items)
    setIsLoading(false)
  }

  async function getSearchPosts(query: string) {
    setIsLoading(true)
    const response = await api.get(
      `/search/issues?q=${query}%20repo:devalexsantos/blog-devalexsantos`,
    )

    setTotalCount(response.data.total_count)
    setPosts(response.data.items)
    setIsLoading(false)
    setIsFilter(false)
  }

  function filterPostsByTag(name: string) {
    const filteredPosts = [] as PostsType[]
    posts.map((post) => {
      const findPost = post.labels.filter((label) => label.name === name)
      return findPost.length > 0 && filteredPosts.push(post)
    })
    setPosts(filteredPosts)
    setTotalCount(filteredPosts.length)
    setIsFilter(true)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    const tagsRepeats: string[] = []
    posts.map((post) => {
      return post.labels.map((label) => tagsRepeats.push(label.name))
    })
    const unique = [...new Set(tagsRepeats)]
    setCategories(unique)
  }, [posts])

  return (
    <PostsContext.Provider
      value={{
        posts,
        totalCount,
        isLoading,
        isFilter,
        categories,
        getSearchPosts,
        filterPostsByTag,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
