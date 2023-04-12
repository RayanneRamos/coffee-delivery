import logoImage from '../../assets/logo.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoImage} alt="Coffe Delivery" />
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={22} weight="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
