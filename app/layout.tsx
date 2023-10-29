/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer/Footer'

/* Instruments */
import styles from './styles/layout.module.css'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <header className={styles.header}>
            <Nav />
          </header>
          <main className={styles.main}>{props.children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
