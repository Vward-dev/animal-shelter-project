import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import { useNotification } from '../../hooks/useNotification';
import VolunteerService from '../../services/VolunteerService';

export default function AddEditApplicationForm({
    volunteer,
}) {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bioDescription, setBioDescription] = useState("");


    function initializeForm() {
        setFirstName(first_name);
        setLastName(last_name);
        setEmailAddress(email);
        setPhoneNumber(phone);
        setBioDescription(bio_description);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const volunteer = {
            first_name: firstName,
            last_name: lastName,
            email: emailAddress,
            phone: phoneNumber,
            bio_desc: bioDescription,
            vounteer_status_id: 1,
            admin_status: false,
        
        }

    // navigate('/applications');

    VolunteerService.addVolunteer(volunteer)
        .then(() => {
            closeHandler();
            successHandler();
            
        })

        .catch((error) => {
            const response = error.response;
            if (response.status === 401) {
                setNotification({ type: 'error', message: 'Session expired.', });
                navigate('/logout');
            } else {
                const message = error.response?.mesage || error.message;
                console.error('Error updating the volunteer:', message);
                setNotification({
                    type: 'error',
                    message: 'Error creating the volunteer',
                });
            }

        }); }



    useEffect(() => {

        initializeForm();
    }, []);


    return (
        <>
            <div>
                <h2> Volunteer Application Form</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="first_name">First Name: </label>
                        <input
                            type="text"
                            id="first_name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last Name:</label>
                        <input
                            type="text"
                            id="last_name"
                            
                            onChange={(e) => setLastName(e.target.value)}
                        /> </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            
                            onChange={(e) => setEmailAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        /> </div>
                    <div>
                        <label htmlFor="bio_description">Bio:</label>
                        <textarea
                            id="bio_description"
                            
                            onChange={(e) => setBioDescription(e.target.value)}
                        /> </div>

                    <div>
                        <button type="submit">Submit</button>

                    </div>
                </form>
            </div>

        </>

    )
}