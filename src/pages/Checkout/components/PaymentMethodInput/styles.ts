import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  padding: 0.1rem;

  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  transition: background-color 0.4s;

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  user-select: none;
`
