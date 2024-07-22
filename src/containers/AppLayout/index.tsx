import { Header } from '@components/Header'
import { Outlet } from 'react-router-dom'
import styles from './main.module.css'


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
