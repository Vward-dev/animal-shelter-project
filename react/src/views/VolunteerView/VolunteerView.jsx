import { useState, useEffect } from 'react';
import VolunteerService from '../../services/VolunteerService';
import { useParams } from 'react-router-dom';
import VolunteerComponent from '../../components/VolunteerComponent/VolunteerComponent';
import styles from './VolunteerView.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';

export default function VolunteerView() {

    const [errorMessage, setErrorMessage] = useState('');
    const [volunteer, setVolunteer] = useState([]);

    function getVolunteer(searchText) {
        VolunteerService.getAllVolunteers(searchText)
            .then((response) => {
                setVolunteer(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // setErrorMessage(`Received an error message from the server: ${error.response.status}`);
                    alert("You do not have authorization to view this page");
                } else if (error.request) {
                    setErrorMessage('No response from the server')

                } else {
                    setErrorMessage('An error occurred while creating request');
                }
            })
    }


    useEffect(() => {
        getVolunteer();
    }, [])


    return (
        <>
            <div className={styles.VolunteerSearchBox}> {errorMessage}</div>
            <header>
                
                <h1 className={styles.volunteerHeader}>Our Volunteers!</h1>
                <SearchBox searchFunction={getVolunteer} />
            </header>
            <div className={styles.volunteerContainer}>
                {volunteer.map((volunteer) => (
                    volunteer.statusId === 2 && (
                        <VolunteerComponent volunteer={volunteer} key={volunteer.id}></VolunteerComponent>
                    )

                ))}
            </div>
        </>



    )





}
