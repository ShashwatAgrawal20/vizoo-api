import styles from '../styles/header.module.css'
import Link from 'next/link'

export default function Header () {
    return <header className={`container ${styles.bgWhite} ${styles.shadow} ${styles.z20}`}>
        <div className={`main ${styles.header}`}>
            <Link href="/" className={styles.headerLogo}>
                Vizoo API
            </Link>
        </div>
    </header>
}