
import styles from './AppHeader.module.css';

export default function AppHeader({title,logo}) {

    return (
        <>
            <header id='app-head' className={styles.headerGrid}>
                <div id='header-info'>
                    <h3 className={styles.logo}>{logo}</h3>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </header>
        </>
    )
}