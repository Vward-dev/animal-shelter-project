import styles from './PendingApplication.module.css';
import {useState, useEffect} from 'react';
import VolunteerService from '../../services/VolunteerService';
import { useParams } from 'react-router-dom';
import VolunteerComponent from '../../components/VolunteerComponent/VolunteerComponent';


export default function PendingApplication () {
    const[errorMessage, setErrorMessage] = useState('');
    const[volunteer, setVolunteer] = useState([]);
    const[displayVolunteer, setDisplayVolunteer] = useState(true);
    const[isApproved, setIsApproved] = useState(false);
    const[isDenied, setIsDenied] = useState(false);


    function getVolunteer() {
        VolunteerService.getPendingVolunteers()
        .then((response) => {
            setVolunteer(response.data);
        })
        .catch ((error) => {
            if (error.response) {
               // setErrorMessage(`Received an error message from the server: ${error.response.status}`);
               alert( "You do not have authorization to view this page");
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

    function approveVolunteer(volunteer) {
        setIsApproved(true);
        VolunteerService.approveVolunteer(volunteer)
        .then(() => {
            setDisplayVolunteer(false);
        })
        .catch ((error) => {
            if (error.response) {
               // setErrorMessage(`Received an error message from the server: ${error.response.status}`);
               alert( "You do not have authorization to view this page");
            } else if (error.request){
                setErrorMessage('No response from the server')
                
            } else {
                setErrorMessage('An error occurred while creating request');
            }
        })

    }

    function denyVolunteer(volunteer) {
        setIsDenied(true);
        VolunteerService.denyVolunteer(volunteer)
        .then(() => {
            setDisplayVolunteer(false);
        })
        .catch ((error) => {
            if (error.response) {
               // setErrorMessage(`Received an error message from the server: ${error.response.status}`);
               alert( "You do not have authorization to view this page");
            } else if (error.request){
                setErrorMessage('No response from the server')
                
            } else {
                setErrorMessage('An error occurred while creating request');
            }
        })

    }

    return (
        <>
        <div>{errorMessage}</div>
        <h1>Pending Applications</h1>

        {volunteer.map((volunteer) => (
            displayVolunteer ? (
            <>
            <VolunteerComponent volunteer = {volunteer}></VolunteerComponent>
            <button onClick={() => approveVolunteer(volunteer)}>Approve</button>
            <button onClick={() => denyVolunteer(volunteer)}>Deny</button>
            </>
            ) : (
                isApproved && (
                    <>
                <div>Aplication Approved</div>
                </>
            ) || isDenied && (  
                    <>
                <div>Application Denied</div>
                </>
              
            )
        
        )))}
        </>

    )
        
    }