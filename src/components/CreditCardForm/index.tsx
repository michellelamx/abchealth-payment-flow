import styles from './main.module.css'
import { Input } from '@components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const CreditCardSchema = z.object({
  cardNumber: z
    .string()
    .min(1, 'This field is required')
    .regex(/^\d{16}$/, 'Card number must be 16 digits'),
  expirationDate: z
    .string()
    .min(1, 'This field is required')
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format'),
  cvv: z
    .string()
    .min(1, 'This field is required')
    .regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
  cardHolder: z
    .string()
    .min(4, 'This field is required'),
  zipCode: z
    .string()
    .min(5, 'Zip code must be 5 digits')
})

type CreditCardInput = z.infer<typeof CreditCardSchema>

type CreditCardFormProps = {
  onFormSubmit: () => void
  onContinue: () => void
  isFormValid: boolean
}

export const CreditCardForm = ({
  onFormSubmit,
  onContinue,
  isFormValid
}: CreditCardFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardInput>({
    resolver: zodResolver(CreditCardSchema),
    defaultValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      cardHolder: '',
      zipCode: ''
    },
  })

  const onSubmit: SubmitHandler<CreditCardInput> = (data) => {
    console.log(JSON.stringify(data))
    onFormSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.creditCardForm}
    >
      <div className={styles.inputRow}>
        <Input
          id='card-number'
          label='Card number'
          isFormValid={isFormValid}
          register={register('cardNumber')}
          error={errors.cardNumber?.message}
        />
      </div>
      <div className={styles.inputRow}>
        <Input
          id='expiration-date'
          label='Expires (MM/YY)'
          isFormValid={isFormValid}
          register={register('expirationDate')}
          error={errors.expirationDate?.message}
        />
        <Input
          id='cvv'
          label='Security code (CVV)'
          isFormValid={isFormValid}
          register={register('cvv')}
          error={errors.cvv?.message}
        />
      </div>
      <div className={styles.inputRow}>
        <Input
          id='card-holder'
          label='Name on card'
          isFormValid={isFormValid}
          register={register('cardHolder')}
          error={errors.cardHolder?.message}
        />
      </div>
      <div className={styles.inputRow}>
        <Input
          id='zip-code'
          label='Zip code'
          isFormValid={isFormValid}
          register={register('zipCode')}
          error={errors.zipCode?.message}
        />
      </div>
      {isFormValid ? (
        <button onClick={onContinue}>Continue</button>
      ) : (
        <button type='submit'>Continue</button>
      )}
    </form>
  )
}
