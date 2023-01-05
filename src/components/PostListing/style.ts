import styled from 'styled-components'

export const PostListingContainer = styled.main`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const CardPost = styled.div`
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-900']};

  header {
    display: flex;
    justify-content: space-between;
    gap: 0.7rem;

    span {
      font-size: 0.7rem;
      white-space: nowrap;
    }
  }

  div.resume-post {
    margin-top: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }
`
