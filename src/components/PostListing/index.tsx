import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { CardPost, PostListingContainer } from './style'

export function PostListing() {
  const { posts } = useContext(PostsContext)

  return (
    <PostListingContainer>
      {posts.map((post, index) => {
        return (
          <CardPost key={post.id}>
            <header>
              <h3>{post.title}</h3>
              <span>{new Date(post.created_at).toLocaleString()}</span>
            </header>
            <div className="resume-post">
              <p>{post.body}</p>
            </div>
          </CardPost>
        )
      })}
    </PostListingContainer>
  )
}
