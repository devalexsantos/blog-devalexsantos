import {
  IconsContainer,
  InfoContainer,
  LoadContainer,
  ProfileHeaderContainer,
  ProfileHeaderContent,
} from './style'
import { ArrowSquareOut, Buildings, FolderNotchOpen } from 'phosphor-react'
import githubIcon from '../../assets/github-icon.svg'
import { useContext } from 'react'
import { UserInfoContext } from '../../contexts/UserInfoContext'
import { LoadingSpinner } from '../LoadingSpinner'

export function ProfileHeader() {
  const { isLoading } = useContext(UserInfoContext)
  return (
    <ProfileHeaderContainer>
      {isLoading ? (
        <LoadContainer>
          <LoadingSpinner />
        </LoadContainer>
      ) : (
        <ContentInfo />
      )}
    </ProfileHeaderContainer>
  )
}

function ContentInfo() {
  const { userinfo } = useContext(UserInfoContext)
  return (
    <ProfileHeaderContent>
      <img
        className="profile-img"
        src={userinfo.avatar_url}
        alt="Imagem de rosto de Alex Santos"
      />
      <InfoContainer>
        <header>
          <h1>{userinfo.name}</h1>
          <a
            href="https://github.com/devalexsantos/devalexsantos.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <strong>SOURCE CODE</strong>
              <ArrowSquareOut size={16} weight="bold" />
            </span>
          </a>
        </header>
        <p>{userinfo.bio}</p>
        <IconsContainer>
          <div>
            <img src={githubIcon} alt="Ícone do Github" />
            <a href={userinfo.html_url} target="_blank" rel="noreferrer">
              {userinfo.login}
            </a>
          </div>
          <div>
            <Buildings size={18} />
            {userinfo.company}
          </div>
          <div>
            <FolderNotchOpen size={18} />
            <strong>
              <a
                href="https://github.com/devalexsantos?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Public Repos:
              </a>
            </strong>
            {userinfo.public_repos}
          </div>
        </IconsContainer>
      </InfoContainer>
    </ProfileHeaderContent>
  )
}
