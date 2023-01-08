import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostsContext } from '../../contexts/PostsContext'
import { LoadingSpinner } from '../LoadingSpinner'
import { CardPost, PostListingContainer } from './style'

export function PostListing() {
  const { isLoading } = useContext(PostsContext)

  return (
    <PostListingContainer>
      {isLoading ? <LoadingSpinner /> : <Posts />}
    </PostListingContainer>
  )
}

function Posts() {
  const { posts, totalCount } = useContext(PostsContext)

  if (totalCount === 0) {
    return <p>Nenhum post encontrado.</p>
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <CardPost key={post.id}>
            <Link to={`/post/${post.number}`}>
              <header>
                <h3>{post.title}</h3>
                <span>{new Date(post.created_at).toLocaleString()}</span>
              </header>
              <div className="resume-post">
                <p>{post.body}</p>
              </div>
            </Link>
          </CardPost>
        )
      })}
    </>
  )
}
