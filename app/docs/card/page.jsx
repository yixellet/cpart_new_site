'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import styles from './Card.module.css'
import { noto_serif, noto_sans } from '../.../../../fonts'

export default function DocsPage() {

  const card = useSelector(state => state.card)

  return (
    <>
      <h1 className={`${noto_sans.className} ${styles.title}`}>Карта партнёра</h1>
      <table className={`${noto_sans.className} ${styles.list}`}>
        <tbody>
          {
            card.map(item => {
              return <tr className={styles.item} key={item.key}>
                <th className={styles.type}>
                  {item.type}
                </th>
                <td className={styles.text}>
                  {item.value}
                </td>
                <td className={styles.clipboard}>
                  <CopyToClipboard text={item.value}>
                    <button className={styles.copy_button}>
                      Копировать
                    </button>
                  </CopyToClipboard>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  )
}
/*
export const metadata = {
  title: 'ГАУ АО "ЦПАРТ" | Карта партнёра',
}
*/