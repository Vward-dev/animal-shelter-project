import { useState, useEffect } from 'react';
import PetService from '../../services/PetService';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import styles from './PetProfileView.module.css'

export default function PetProfileView({ pet }) {
    const user = useContext(UserContext);
    const { id } = useParams();
    const [petProfile, setPetProfile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [showApplicationForm, setShowApplicationForm] = useState(true);


    function getPetById(id) {
        PetService.getPetId(id)
            .then((response) => {
                setPetProfile(response.data);
            })
            .catch((error) => {
                const response = error.response;
                setErrorMessage('There was an error updating the pet in the database. Please try again later.');
                console.log("Error Fetching Pet Profile");


            });
    }

    useEffect(() => {

        getPetById(id);
    }, [id])

    // function initializeForm() {
    //     setFirstName(first_name);
    //     setLastName(last_name);
    //     setEmailAddress(email);
    //     setPhoneNumber(phone);

    // }
    // function handleSubmit(event) {
    //     if (!user) {
    //         alert("Please log in to submit your application.");
    //     } else {
    //         event.preventDefault();
    //         const volunteer = {
    //             userId: user.id,
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: emailAddress,
    //             phoneNumber: phoneNumber,
    //             statusId: 1,
    //             adminStatus: false,

    //         }


    // if(!pet || petProfile.petId !==parseInt(id)) {
    //     return  <div>Pet data might not be available </div>
    // }

    if (!petProfile) {
        return <div>Pet not found</div>
    }


    return (
        <div className={styles.PetProfileContainer}>
            <div className={styles.container}>
                <div className={styles.profileCard}>
                    <header className={styles.petProfileHeader}>
                        <h1>{petProfile.name}</h1>
                    </header>

                    <section className={styles.profileDetails}>
                        <div>Species: {petProfile.species}</div>
                        <div>Breed: {petProfile.breed}</div>
                        <div>Age: {petProfile.age}</div>
                        <div>Sex: {petProfile.sex}</div>
                        <div>{petProfile.details}</div>
                    </section>

                    <section className={styles.imageContainer}>
                        <img className={styles.profileImage} src={petProfile.photo} alt={petProfile.name} />

                    </section>
                </div>

                <section className={styles.adoptionForm}>
                    <h2>Apply to Adopt {petProfile.name}</h2>
                    <form className={styles.adoptionInfo}>
                        <div>
                            <label>Your First Name:</label>
                            <input type='text' id='first_name'>
                            </input>
                        </div>
                        <div>
                            <label>Your Last Name:</label>
                            <input type='text' id='last_name'></input>
                        </div>
                        <div>
                            <label>Your Phone:</label>
                            <input type='text' id='phone_number'></input>
                        </div>
                        <div>
                            <label>Why would you like to adopt {petProfile.name}? :</label>
                            <input type='text' id='adoption_reason'></input>
                        </div>


                    </form>


                </section>
                <footer>

                </footer>


                {user && (user.authorities[0].name === "ROLE_VOLUNTEER" || user.authorities[0].name === "ROLE_ADMIN") && (
                    <div>
                        <Link to={`/pets/petProfile/${id}/update`} pet={pet} className={styles.updatePetButton}>Edit Pet Listing </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
