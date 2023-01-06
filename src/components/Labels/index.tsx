import { X } from 'phosphor-react'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'
import { LabelContainer, LabelItem } from './style'

export function Labels() {
  const { isFilter, categories, filterPostsByTag, getSearchPosts } =
    useContext(PostsContext)

  return (
    <LabelContainer>
      {categories.map((tag, index) => (
        <LabelItem onClick={(e) => filterPostsByTag(tag)} key={index}>
          {tag}
        </LabelItem>
      ))}
      {isFilter && (
        <LabelItem onClick={(e) => getSearchPosts('')}>
          <X size={14} />
        </LabelItem>
      )}
    </LabelContainer>
  )
}
