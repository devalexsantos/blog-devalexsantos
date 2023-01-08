/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContainer } from './style'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { PostHeader } from './components/PostHeader'
import { PostBody } from './components/PostBody'

interface LabelType {
  name: string
}

interface PostType {
  html_url: string
  title: string
  user: {
    login: string
  }
  labels: LabelType[]
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const { number } = useParams()
  const [post, setPost] = useState({} as PostType)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function getPost() {
    setIsLoading(true)
    await api
      .get(`/repos/devalexsantos/devalexsantos.com.br/issues/${number}`)
      .then((response) => setPost(response.data))
      .catch(() => navigate('/'))

    setIsLoading(false)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <PostContainer>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <PostContent
          htmlUrl={post.html_url}
          comments={post.comments}
          createdAt={post.created_at}
          title={post.title}
          user={post.user}
          body={post.body}
        />
      )}
    </PostContainer>
  )
}

interface PostContentProps {
  htmlUrl: string
  comments: number
  createdAt: string
  title: string
  user: {
    login: string
  }
  body: string
}

function PostContent({
  htmlUrl,
  comments,
  createdAt,
  title,
  user,
  body,
}: PostContentProps) {
  return (
    <>
      <PostHeader
        htmlUrl={htmlUrl}
        comments={comments}
        createdAt={createdAt}
        title={title}
        user={user}
      />
      <PostBody body={body} />
    </>
  )
}
