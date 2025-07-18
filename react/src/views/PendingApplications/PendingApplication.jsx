import styles from './PendingApplication.module.css';
import { useState, useEffect } from 'react';
import VolunteerService from '../../services/VolunteerService';
import { useParams } from 'react-router-dom';
import VolunteerComponent from '../../components/VolunteerComponent/VolunteerComponent';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function PendingApplication() {
    const [errorMessage, setErrorMessage] = useState('');
    const [volunteers, setVolunteers] = useState([]);

    function getVolunteers() {
        VolunteerService.getPendingVolunteers()
            .then((response) => {
                setVolunteers(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    alert("You do not have authorization to view this page");
                } else if (error.request) {
                    setErrorMessage('No response from the server')
                } else {
                    setErrorMessage('An error occurred while creating request');
                }
            })
    }

    useEffect(() => {
        getVolunteers();
    }, [])

    function approveVolunteer(volunteer) {
        VolunteerService.approveVolunteer(volunteer)
            .then(() => {
                getVolunteers(); // refetch pending volunteers
            })
            .catch((error) => {
                if (error.response) {
                    alert("You do not have authorization to view this page");
                } else if (error.request) {
                    setErrorMessage('No response from the server')
                } else {
                    setErrorMessage('An error occurred while creating request');
                }
            })
    }

    function denyVolunteer(volunteer) {
        VolunteerService.denyVolunteer(volunteer)
            .then(() => {
                getVolunteers(); // refetch pending volunteers
            })
            .catch((error) => {
                if (error.response) {
                    alert("You do not have authorization to view this page");
                } else if (error.request) {
                    setErrorMessage('No response from the server')
                } else {
                    setErrorMessage('An error occurred while creating request');
                }
            })
    }

    return (
        <div className={styles.pendingView}>
            <div className={styles.errorMessage}>{errorMessage}</div>
            <div className={styles.pendingContainer}>
            <div className={styles.VolunteerSearchBox}> {errorMessage}</div>
                <h1>Pending Applications</h1>
                

                <div className={styles.cardGrid}>
                {volunteers.map((volunteer) => (
                    <div className={styles.volunteerBlock} key={volunteer.id}>
                        <VolunteerComponent className={styles.volunteerInfo} volunteer={volunteer}></VolunteerComponent>
                        <button  className={styles.button1} onClick={() => approveVolunteer(volunteer)}>Approve</button>
                        <button className={styles.button2} onClick={() => denyVolunteer(volunteer)}>Deny</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}


