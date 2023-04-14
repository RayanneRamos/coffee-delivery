import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from '../ConfirmationSection'
import { DetailsContainer, SelectedCoffeeContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => {
          return <CoffeeCartCard key={item.id} coffee={item} />
        })}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeeContainer>
  )
}
