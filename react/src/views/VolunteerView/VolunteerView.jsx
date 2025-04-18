import {useState, useEffect} from 'react';
import VolunteerService from '../../services/VolunteerService';
import { useParams } from 'react-router-dom';
import VolunteerComponent from '../../components/VolunteerComponent/VolunteerComponent';


export default function VolunteerView() {

    const [errorMessage, setErrorMessage] = useState('');
    const [volunteer, setVolunteer] = useState([]);

    function getVolunteer() {
        VolunteerService.getAllVolunteers()
        .then((response) => {
            setVolunteer(response.data);
        })
        .catch ((error) => {
            if (error.response) {
                setErrorMessage(`Received an error message from the server: ${error.response.status}`);
            } else if (error.request){
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
        <div>{errorMessage}</div>
        <h1>Our Volunteers!</h1>

        {volunteer.map((volunteer) => (
            <VolunteerComponent volunteer = {volunteer}></VolunteerComponent>
        ))}
        </>



    )





}
