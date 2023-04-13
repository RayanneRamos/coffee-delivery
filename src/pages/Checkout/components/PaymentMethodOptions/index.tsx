import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMedthodOptionsContainer } from './styles'

export function PaymentMethodOptions() {
  return (
    <PaymentMedthodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMedthodOptionsContainer>
  )
}
