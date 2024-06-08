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
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64">
                        <path d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z"/>
                        <path d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z"/>
                      </svg>
                    </button>
                  </CopyToClipboard>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      <div className={styles.can_download}>
        <p className={`${noto_sans.className} ${styles.can_download_text}`}>
          Вы можете скачать карту партнёра в 
          форматах <a className={styles.link}>PDF</a> и <a className={styles.link}>ODT</a>.
        </p>
      </div>
    </>
  )
}
/*
export const metadata = {
  title: 'ГАУ АО "ЦПАРТ" | Карта партнёра',
}
*/