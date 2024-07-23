import { useUser } from '@context/userContext'
import { Link } from 'react-router-dom'
import styles from './main.module.css'


export const WelcomePage = () => {
  const { userInfo } = useUser()

  if (!userInfo) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className={`${styles.welcomeMessage} content-wrapper`}>
        <div className='accent-text'>
          Hi, {userInfo.name}
        </div>
        <div className={styles.welcomeDetails}>
          You have {userInfo.invoices} medical bills ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.
        </div>
      </div>
      <div className={styles.paySection}>
        <div className='content-wrapper'>
          <div className={styles.totalDue}>
            Total due
            <span className='accent-text'>{`$${userInfo?.balance.toFixed(2)}`}</span>
          </div>
          <Link
            aria-label='Pay total'
            className='button-link'
            to='/payment'
          >
            Pay total
          </Link>
        </div>
      </div>
    </>
  )
}
