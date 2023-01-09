import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme['gray-900']};
  background-size: auto;

  margin: auto;
  margin-top: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`
