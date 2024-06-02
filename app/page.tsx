/* Components */
import styles from './styles/title.module.css'
import { noto_serif, noto_sans } from './fonts'

export default function IndexPage() {
  return (
  <>
  <div>
    <h2 className={`${noto_sans.className} ${styles.gau}`}>
      ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКОЙ ОБЛАСТИ</h2>
    <div className={`${noto_serif.className} ${styles.name}`}>
      <h1 className={styles.center}>ЦЕНТР</h1>
      <div>
        <h2 className={styles.part}>ПРОСТРАНСТВЕННОЙ АНАЛИТИКИ</h2>
        <h2 className={styles.part}>И РАЗВИТИЯ ТЕРРИТОРИЙ</h2>
      </div>
    </div>
  </div>
    <p>
      Визитка организации
    </p>
  </>)
}

export const metadata = {
  title: {
    default: 'ГАУ АО "ЦПАРТ"',
    template: 'ГАУ АО "ЦПАРТ" | $s'
  },
  description: 'Государственное автономное учреждение Астраханской области "Центр пространственной аналитики и развития территорий". Официальный ресурс'
}
