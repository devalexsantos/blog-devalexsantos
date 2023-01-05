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

  input {
    padding: 0.75rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }
`
