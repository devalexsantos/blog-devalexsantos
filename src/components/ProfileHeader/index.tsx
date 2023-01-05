import {
  IconsContainer,
  InfoContainer,
  ProfileHeaderContainer,
  ProfileHeaderContent,
} from './style'
import exampleAvatar from '../../assets/avatar-alex-santos.jpg'
import { ArrowSquareOut, Buildings, User } from 'phosphor-react'
import githubIcon from '../../assets/github-icon.svg'

export function ProfileHeader() {
  return (
    <ProfileHeaderContainer>
      <ProfileHeaderContent>
        <img
          className="profile-img"
          src={exampleAvatar}
          alt="Imagem de rosto de Alex Santos"
        />
        <InfoContainer>
          <header>
            <h1>Alex Santos</h1>
            <span>
              <strong>SOURCE</strong>
              <ArrowSquareOut size={16} weight="bold" />
            </span>
          </header>
          <p>
            Apaixonado por criar telas, tenho um background de Designer.
            Atualmente estudo e trabalho com desenvolvimento web front end. Sou
            focado em me manter atualizado com as tecnologias mais modernas do
            mercado. Tenho experiênciais reais e em produção com Javascript,
            React.js, Next.js, HTML, CSS entre outras.
          </p>
          <IconsContainer>
            <div>
              <img src={githubIcon} alt="Ícone do Github" />
              devalexsantos
            </div>
            <div>
              <Buildings size={18} />
              Cast Group
            </div>
            <div>
              <User size={18} weight="fill" />
              34 seguidores
            </div>
          </IconsContainer>
        </InfoContainer>
      </ProfileHeaderContent>
    </ProfileHeaderContainer>
  )
}
