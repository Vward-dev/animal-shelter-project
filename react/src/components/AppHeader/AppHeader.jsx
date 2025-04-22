
import styles from './AppHeader.module.css';

export default function AppHeader({title,logo}) {

    return (
        <>
            <header id='app-head' className={styles.headerGrid}>
                
                    
                    <img className='logo' src="src\assets\images\Gimme shelter (4).png" alt="" />
                    
                
            </header>
        </>
    )
}