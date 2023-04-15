import styled from 'styled-components'

export const PaymentMedthodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${(props) => props.theme.colors['base-error']};
  }
`
