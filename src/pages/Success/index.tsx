import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import deliveryImage from '../../assets/delivery.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function SuccessPage() {
  const { colors } = useTheme()

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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                <br />
                Farrapos - Porto Alegre, RS
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
                Pagamento na entrega <br /> <strong>Cartão de crédito</strong>
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
