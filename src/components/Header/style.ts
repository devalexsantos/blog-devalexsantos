import styled from 'styled-components'
import headerBg from '../../assets/header-background.jpg'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${headerBg});
  background-size: auto;

  margin: auto;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`
