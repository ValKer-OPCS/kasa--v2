import styles from './styles.module.scss'
import Image from 'next/image'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <Image src='/logoKasaWhite.png' alt="Logo Kasa avec une maison à la place du a" width={200} height={200}/>
                <p>© {year} Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer