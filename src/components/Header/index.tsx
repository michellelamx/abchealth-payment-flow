import { AbcLogo } from '@components/Svg/abcLogo'
import styles from './main.module.css'


export const Header = () => {

  return (
    <header>
      <div className={styles.logo}>
        <AbcLogo data-testid='abc-logo' />
      </div>
    </header>
  )
}
