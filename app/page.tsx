/* Components */

import styles from './IndexPage.module.css'
import { noto_serif, noto_sans } from './fonts'

export default function IndexPage() {
  return (
  <>
  <div className={styles.cpart_full_name}>
    <h2 className={`${noto_sans.className} ${styles.gauao}`}>
      ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ АСТРАХАНСКЙ ОБЛАСТИ</h2>
    <div>
      <h1>ЦЕНТР</h1>
      <div>
        <h2>ПРОСТРАНСТВЕННОЙ АНАЛИТИКИ</h2>
        <h2>И РАЗВИТИЯ ТЕРРИТОРИЙ</h2>
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
