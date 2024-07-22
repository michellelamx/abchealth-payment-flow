import styles from './main.module.css'
import { Header } from '@components/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {

  return (
    <>
      <Header />
      <main className={styles.contentContainer}>
        <Outlet />
      </main>
    </>
  )
}
