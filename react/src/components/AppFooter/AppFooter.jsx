import styles from './AppFooter.module.css';

export default function AppFooter() {


return (
    <>
    <footer className={styles.siteFooter}>
        <div className={styles.footerSection}>
            <h4>Our Location</h4>
            <p>1234 Pet Lane<br/>Animal City, OH 56789</p>
        </div>
        <div className={styles.footerSection}>
            <h4>About Us</h4>
            <p>Non-profit shelter helping animals find homes.<br/>Open Monday - Saturday 9am-6pm</p>
        </div>
        <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: info@animalshelter.org<br/>Get Directions: Link</p>
        </div>
    </footer>
    </>
)


}