import { formatDistanceToNow } from 'date-fns'
import { ChatCircleText, CalendarBlank } from 'phosphor-react'
import {
  PostHeaderContainer,
  FooterContainer,
  PostHeaderContent,
} from './style'
import { Link } from 'react-router-dom'

import { ptBR } from 'date-fns/locale'
import githubIcon from '../../../../assets/github-icon.svg'

interface PostHeaderProps {
  htmlUrl: string
  title: string
  user: {
    login: string
  }
  createdAt: string
  comments: number
}

export function PostHeader({
  htmlUrl,
  title,
  user,
  createdAt,
  comments,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderContent>
        <header>
          <Link to="/">Voltar</Link>
          <a href={htmlUrl} target="_blank" rel="noreferrer">
            Ver no Github
          </a>
        </header>
        <h1>{title}</h1>
        <FooterContainer>
          <div>
            <img src={githubIcon} alt="Ícone do Github" />
            <span>{user && user.login}</span>
          </div>

          <div>
            <CalendarBlank size={16} weight="bold" />
            {createdAt && (
              <span>
                Criado{' '}
                {formatDistanceToNow(
                  new Date(new Date(createdAt).toISOString()),
                  {
                    addSuffix: true,
                    locale: ptBR,
                  },
                )}
              </span>
            )}
          </div>
          <div>
            <ChatCircleText size={16} weight="bold" />
            <span>Comentários: {comments}</span>
          </div>
        </FooterContainer>
      </PostHeaderContent>
    </PostHeaderContainer>
  )
}
