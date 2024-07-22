import styles from './main.module.css'
import { AbcLogo } from '@components/Svg/abcLogo'

export const Header = () => {

  return (
    <header>
      <div className={styles.logo}>
        <AbcLogo data-testid='abc-logo' />
      </div>
    </header>
  )
}
