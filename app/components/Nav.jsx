'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'
import logo from '../../public/QmYdAvMh5ZQ.png';

export const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img src={logo.src} alt="Logo" style={{width: 55, height: 50}} />
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
          pathname === '/docs' ? styles.active : ''
        }`}
        href="/docs"
      >
        Документы
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/news' ? styles.active : ''
        }`}
        href="/news"
      >
        Новости
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/blog' ? styles.active : ''
        }`}
        href="/blog"
      >
        Статьи
      </Link>
    </nav>
  )
}
