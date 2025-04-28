
import styles from './AppHeader.module.css';
import SocialComponents from '../socialComponents/SocialComponents';
import { Navigate } from 'react-router-dom';
export default function AppHeader({logo}) {

    return (
        <>
            <header id='app-head' className={styles.headerGrid}>
                
                    
                    <img className={styles.logo} src="src\assets\images\Gimme.png" alt=""/>
                    <h1 id='header-title'>Gimme Shelter Adoption</h1>
                    <div id={styles.socials}>
                    <SocialComponents></SocialComponents>
                    </div>
                    <div></div>
                    <div></div>
                    <button className={styles.donateButton}>Donate Now!</button>
                    
                
            </header>
        </>
    )
}