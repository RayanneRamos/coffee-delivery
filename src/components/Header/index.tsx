import { NavLink } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoImage} alt="Coffe Delivery" />
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              <ShoppingCart size={22} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
