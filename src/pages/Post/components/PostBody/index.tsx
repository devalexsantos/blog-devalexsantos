import { BodyPostContainer } from './style'
import { marked } from 'marked'

interface PostBodyProps {
  body: string
}

export function PostBody({ body }: PostBodyProps) {
  return (
    <>
      {body && (
        <BodyPostContainer
          dangerouslySetInnerHTML={{ __html: marked.parse(body) }}
        />
      )}
    </>
  )
}
