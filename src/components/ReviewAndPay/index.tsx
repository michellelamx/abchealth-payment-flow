import styles from './main.module.css'
import { VisaIcon } from '@components/Svg/visaIcon'
import { Link } from 'react-router-dom'


export const ReviewAndPay = () => {

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewDetails}>
        You're about to make a payment of <span className={styles.paymentAmount}>$600.00</span>
      </div>
      <div className={styles.paymentDetails}>
        <div className={`${styles.paymentHeader} body-sm-bold`}>Payment Method</div>
        <div className={styles.paymentMethod}>
          <VisaIcon data-testid='visa-icon' />
          <div className={styles.cardInfo}>
            Card ending in ••••4242
          </div>
        </div>
      </div>
      <Link
        className='button-link'
        to='/success'
        aria-label='Pay $600'
      >
        Pay $600
      </Link>
    </div>
  )
}
