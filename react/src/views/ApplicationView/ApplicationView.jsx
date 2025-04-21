import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import { useNotification } from '../../hooks/useNotification';
import VolunteerService from '../../services/VolunteerService';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function AddEditApplicationForm({
    volunteer,
}) {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bioDescription, setBioDescription] = useState("");
    const user = useContext(UserContext);
    const [showApplicationForm, setShowApplicationForm] = useState(true);


    function initializeForm() {
        setFirstName(first_name);
        setLastName(last_name);
        setEmailAddress(email);
        setPhoneNumber(phone);
        setBioDescription(bio_description);
    }

    function handleSubmit(event) {
        if (!user) {
            alert("Please log in to submit your application.");
        } else {
            event.preventDefault();
            const volunteer = {
                userId: user.id,
                firstName: firstName,
                lastName: lastName,
                email: emailAddress,
                phoneNumber: phoneNumber,
                bioDescription: bioDescription,
                statusId: 1,
                adminStatus: false,

            }

            // navigate('/applications');

            VolunteerService.addVolunteer(volunteer)
                .then(() => {
                    setShowApplicationForm(false);
                })
                .catch((error) => {
                    const response = error.response;
                    alert('There was an error submitting your application. Please try again later.');

                });
        }
    }



    useEffect(() => {

        initializeForm();
    }, []);


    return (
        <>
            {showApplicationForm ? (<div>
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
            </div>) :
                (<div>
                    <h2>Application Submitted</h2>
                </div>)
            }

        </>

    )
}