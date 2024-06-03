import styles from './Card.module.css'
import { noto_sans } from '../.../../../fonts'

export default function DocsPage() {

  return (
    <>
      <section className={styles.section}>
        <h2 className={`${noto_sans.className} ${styles.title}`}>Лицензии</h2>
      </section>
      <section className={styles.section}>
        <h2 className={`${noto_sans.className} ${styles.title}`}>Сертификаты</h2>
      </section>
      <section className={styles.section}>
        <h2 className={`${noto_sans.className} ${styles.title}`}>Свидетельства</h2>
      </section>
    </>
  )
}

export const metadata = {
  title: 'ГАУ АО "ЦПАРТ" | Лицензии, сертификаты, свидетельства',
}
