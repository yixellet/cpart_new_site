'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Главная
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/about' ? styles.active : ''
        }`}
        href="/about"
      >
        О нас
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/work' ? styles.active : ''
        }`}
        href="/work"
      >
        Деятельность
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/contacts' ? styles.active : ''
        }`}
        href="/contacts"
      >
        Контакты
      </Link>
    </nav>
  )
}
