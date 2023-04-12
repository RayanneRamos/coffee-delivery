import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CheckoutPage } from './pages/Checkout'
import { SuccessPage } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  )
}
