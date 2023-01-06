import styled from 'styled-components'

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const LabelItem = styled.button`
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme['gray-100']};
  display: flex;
  align-items: center;
  cursor: pointer;
`
