'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

const Header: React.FC = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image className={styles.header__logo} src='/logoKasa.png'
          alt="Logo de l'entreprise Kasa" width={200} height={200}/>

        <ul>
          <li>
            <Link href="/" className={pathname === '/' ? styles.active : undefined}>Accueil</Link>
          </li>
          <li>
            <Link href="/about" className={pathname === '/about' ? styles.active : undefined}>À Propos</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header