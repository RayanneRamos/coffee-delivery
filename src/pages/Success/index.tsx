import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import deliveryImage from '../../assets/delivery.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function SuccessPage() {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) {
    return <></>
  }

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido cocnfirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin size={16} weight="fill" />}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>{' '}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
            iconBg={colors['brand-purple']}
          />
          <InfoWithIcon
            icon={<Clock size={16} weight="fill" />}
            text={
              <RegularText>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
            iconBg={colors['brand-yellow']}
          />
          <InfoWithIcon
            icon={<CurrencyDollar size={16} weight="fill" />}
            text={
              <RegularText>
                Pagamento na entrega <br />{' '}
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
            iconBg={colors['brand-yellow-dark']}
          />
        </OrderDetailsContainer>
        <img src={deliveryImage} alt="Delivery Image" />
      </section>
    </OrderConfirmedContainer>
  )
}
