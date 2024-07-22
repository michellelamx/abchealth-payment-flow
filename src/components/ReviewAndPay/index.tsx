import { VisaIcon } from '@components/Svg/visaIcon'
import { useUser } from '@context/userContext'
import { Link } from 'react-router-dom'
import styles from './main.module.css'


export const ReviewAndPay = () => {
  const { userInfo, creditCardInfo } = useUser()

  if (!userInfo || !creditCardInfo) {
    return <div>Loading...</div>;
  }

  const lastFourDigits = creditCardInfo.cardNumber.slice(-4)

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewDetails}>
        You're about to make a payment of <span className={styles.paymentAmount}>{`$${userInfo.balance.toFixed(2)}`}</span>
      </div>
      <div className={styles.paymentDetails}>
        <div className={`${styles.paymentHeader} body-sm-bold`}>Payment Method</div>
        <div className={styles.paymentMethod}>
          <VisaIcon data-testid='visa-icon' />
          <div className={styles.cardInfo}>
            Card ending in ••••{lastFourDigits}
          </div>
        </div>
      </div>
      <Link
        className='button-link'
        to='/success'
        aria-label={`Pay $${userInfo.balance.toFixed(2)}`}
      >
        Pay ${userInfo.balance.toFixed(2)}
      </Link>
    </div>
  )
}
