import styled from 'styled-components'

export const ProfileHeaderContainer = styled.header`
  width: 100%;
  max-width: 864px;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-700']};
  padding: 2rem;
  margin-top: -8rem;
`

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileHeaderContent = styled.div`
  display: flex;
  gap: 2rem;

  img.profile-img {
    width: 100%;
    max-width: 148px;
    max-height: 148px;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme['gray-600']};

    @media (max-width: 768px) {
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: justify;
  }
`

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      gap: 8px;
      align-items: start;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    border: none;
    width: 18px;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.4rem;
  }
`
