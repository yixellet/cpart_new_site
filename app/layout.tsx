/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
import { Nav2 } from './components/Nav2'
import { Footer } from './components/Footer/Footer'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'
import { noto_sans } from './fonts'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en" className={noto_sans.className}>
        <body className={styles.body}>
          <header className={styles.header}>
            <Nav />
            {/*<Nav2 />*/}
          </header>
          <main className={styles.main}>{props.children}</main>
          <footer className={styles.footer}>
            <Footer />
          </footer>
        </body>
      </html>
    </Providers>
  )
}
