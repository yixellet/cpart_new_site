import styles from './icon.module.css'

export default function Sandwich() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
      <path d="M 0,2.499995 H 24" className={styles.sandwich} />
      <path d="M 0,12 H 24" className={styles.sandwich} />
      <path d="M 0,21.500005 H 24" className={styles.sandwich} />
    </svg>
  );
}