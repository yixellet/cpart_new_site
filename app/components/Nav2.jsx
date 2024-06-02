'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'
import logo from '../../public/QmYdAvMh5ZQ.png';
import { useSelector } from 'react-redux';

export const Nav2 = () => {

  return (
    <nav className={styles.nav}>
      <ol className={styles.main_menu}>
      </ol>
    </nav>
  )
}
