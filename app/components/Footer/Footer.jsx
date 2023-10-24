import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav>
          <ul>
            <li>Главная</li>
            <li>Кто мы</li>
            <li>Что мы делаем</li>
            <li>Как нас найти</li>
            <li>Новости</li>
            <li>Статьи</li>
            <li>Документы</li>
          </ul>
        </nav>
        <div className={styles.links}>
          <p>Минимущество</p>
          <p>Губернатор</p>
        </div>
      </div>
      <div className={styles.contacts}>
        <p>Адрес</p>
        <p>Мыло</p>
        <p>Телефоны</p>
      </div>
    </footer>
  )
}