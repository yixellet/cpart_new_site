'use client'

/* Core */
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import Sandwich from '../Icons/Sandwich/Icon'
import styles from './Nav.module.css'
import { noto_sans } from '../../fonts'
import logo from '../../../public/QmYdAvMh5ZQ.png'

export const Nav2 = () => {
  const menu = useSelector(state => state.menu)
  const pathname = usePathname()

  return (
    <nav className={`${noto_sans.className} ${styles.nav}`}>
      <div className={styles.menu_button_wrapper}>
        <button className={styles.menu_button}>
          <Sandwich />
        </button>
      </div>
      <ol className={styles.main_menu}>
        <Link href='/' tabIndex={1}>
          <img src={logo.src} alt="Logo" style={{width: 55, height: 50}} />
        </Link>
        {
          Object.values(menu).map(item => 
            {
              if(item.submenu) {
                return <li key={item.code} 
                className={styles.main_menu_item_sub}>{item.name}
                  <div className={styles.submenu_wrapper}>
                    <ol className={styles.submenu}>
                      {
                        Object.values(item.submenu).map(subitem =>
                          <li key={subitem.code} className={styles.submenu_item}>
                            <Link className={styles.sub_link} tabIndex={item.tabindex}
                            href={`/${item.code}/${subitem.code}`}>{subitem.name}</Link>
                          </li>
                        )
                      }
                    </ol>
                  </div>
                </li>
              } 
              else {
                return <li key={item.code} className={styles.main_menu_item}>
                  <Link className={styles.main_link} 
                  href={`/${item.code}`}>{item.name}</Link>
                </li>
              }
            }
          )
        }
      </ol>
    </nav>
  )
}
