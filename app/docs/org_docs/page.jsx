import Link from 'next/link'

import styles from './Card.module.css'
import { noto_sans } from '../.../../../fonts'

export default function DocsPage() {

  return (
    <>
      <h1>Учредительные документы</h1>
      <ul>
        <li>
          <Link href=''>Устав учреждения</Link>
        </li>
      </ul>
      <h2>Фонд пространственных данных</h2>
      <ul>
        <li>
          <Link href=''>Постановление 257-П</Link>
        </li>
        <li>
          <Link href=''>Положение о Фонде пространственных данных</Link>
        </li>
        <li>
          <Link href=''>Порядок предоставления материалов фонда</Link>
        </li>
        <li>
          <Link href=''>Договор возмездного предоставления материалов</Link>
        </li>
        <li>
          <Link href=''>Договор безвозмездного предоставления материалов</Link>
        </li>
        <li>
          <Link href=''>Форма заявления на предоставление материалов Фонда</Link>
        </li>
        <li>
          <Link href=''>Доверенность</Link>
        </li>
      </ul>
    </>
  )
}

export const metadata = {
  title: 'ГАУ АО "ЦПАРТ" | Лицензии, сертификаты, свидетельства',
}
