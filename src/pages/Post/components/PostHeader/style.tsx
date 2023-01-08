import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  width: 100%;
  max-width: 864px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 2rem;
  margin-top: -8rem;
`

export const PostHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;

    button {
      background-color: rgba(0, 0, 0, 0);
      color: ${(props) => props.theme['gray-100']};
      font-size: 12px;
      text-transform: uppercase;
      cursor: pointer;
    }

    a {
      text-transform: uppercase;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
