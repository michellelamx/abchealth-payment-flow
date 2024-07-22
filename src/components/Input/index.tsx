import { CheckIcon } from '@components/Svg/checkIcon'
import { AlertIcon } from '@components/Svg/alertIcon'
import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './main.module.css'

interface InputProps {
  id: string
  label: string
  register: UseFormRegisterReturn
  error?: string
  isFormValid: boolean
}

export const Input = ({
  id,
  label,
  register,
  error,
  isFormValid
}: InputProps) => {

  return (
    <div className={styles.inputContainer}>
      <label
        className='body-sm-bold'
        htmlFor={id}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          {...register}
          aria-labelledby={label}
          aria-invalid={error ? 'true' : 'false'}
        />
        {error ? (
          <AlertIcon className={styles.trailingIcon} />
        ) : isFormValid ? (
          <CheckIcon className={styles.trailingIcon} />
        ) : null
        }
      </div>
      {error && <div className='error-message'>{error}</div>}
    </div>
  )
}

