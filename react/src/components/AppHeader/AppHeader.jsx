
import styles from './AppHeader.module.css';
import SocialComponents from '../socialComponents/SocialComponents';
export default function AppHeader({logo}) {

    return (
        <>
            <header id='app-head' className={styles.headerGrid}>
                
                    
                    <img className={styles.logo} src="src\assets\images\Gimme.png" alt="" />
                    <h1>Gimme Shelter Adoption</h1>
                    <div id={styles.socials}>
                    <SocialComponents></SocialComponents>
                    </div>
                    <div></div>
                    <div></div>
                    <button>Donate Now!</button>
                    
                
            </header>
        </>
    )
}