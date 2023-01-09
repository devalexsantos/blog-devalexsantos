import { BodyPostContainer, BodyPostContent } from './style'
import { marked } from 'marked'

interface PostBodyProps {
  body: string
}

export function PostBody({ body }: PostBodyProps) {
  return (
    <>
      {body && (
        <BodyPostContainer>
          <BodyPostContent
            dangerouslySetInnerHTML={{ __html: marked.parse(body) }}
          />
        </BodyPostContainer>
      )}
    </>
  )
}
