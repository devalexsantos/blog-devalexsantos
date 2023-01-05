import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4.5rem;

  .header-search {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  form {
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
      padding: 0.75rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-100']};
    }

    button {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      align-items: center;
      background-color: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['gray-800']};
      border-radius: 6px;
      cursor: pointer;
    }
  }
`
