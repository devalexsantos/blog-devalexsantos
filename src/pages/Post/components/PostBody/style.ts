import styled from 'styled-components'

export const BodyPostContainer = styled.div`
  width: 100%;
  max-width: 864px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 2rem;
  margin-top: 2rem;
  background-size: contain;
  object-fit: cover;
`

export const BodyPostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img[alt='image'] {
    width: 100%;
    display: flex;
  }
`
