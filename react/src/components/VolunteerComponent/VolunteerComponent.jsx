
import styles from './VolunteerComponent.module.css';

export default function VolunteerComponent( {volunteer} ) {


    return (
        <div className={styles.volunteer}>
            <h1 className={styles.volunteerName}>{volunteer.firstName} {volunteer.lastName}</h1>
            <p>{volunteer.email}</p>
            <p>{volunteer.phoneNumber}</p>
            <p>{volunteer.bioDescription}</p>
        </div>
        
    )

}