
import styles from './AppHeader.module.css';

export default function AppHeader({logo}) {

    return (
        <>
            <header id='app-head' className={styles.headerGrid}>
                
                    
                    <img className={styles.logo} src="src\assets\images\Gimme.png" alt="" />
                    
                
            </header>
        </>
    )
}