import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from '../ConfirmationSection'
import { DetailsContainer, SelectedCoffeeContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeeContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeeContainer>
  )
}
