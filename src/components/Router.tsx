import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/default'
import { Blog } from '../pages/Blog'
import { Post } from '../pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
