import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        type="number"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        type="text"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        type="text"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder="Bairro"
        type="text"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        type="text"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        type="text"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
