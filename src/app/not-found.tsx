import Link from 'next/link'
import styles from './styles.module.scss'

const Error = () => {
  return (
    <main className={styles.error}>
      <div className={styles.message}>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      </div>
      <div className={styles.message__link}>
      <Link href="/">Retourner sur la page d&apos;accueil</Link>
      </div>
    </main>
  )
};

export default Error
