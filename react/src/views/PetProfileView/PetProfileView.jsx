import { useState, useEffect } from 'react';
import PetService from '../../services/PetService';
import { useParams } from 'react-router-dom';

import styles from './PetProfileView.module.css'

export default function PetProfileView({pet}) {
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
        console.log('Pet Profile Data: ', response.data);
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

    if(!petProfile) {
        return <div>Pet not found</div>
    }


return (
 <div className={styles.PetProfileContainer}>
    <header className= {styles.petProfileHeader}>
        <h1>{petProfile.name}</h1>
        
    </header>

    <section className= {styles.profileDetails}>
        <div>{petProfile.species}</div>
        <div>{petProfile.breed}</div>
        <div>{petProfile.age}</div>
        <div>{petProfile.sex}</div>
        <div>{petProfile.details}</div>
    </section>

    <section className= {styles.imageContainer}>
        <img className={styles.profileImage} src={petProfile.petImage} alt={petProfile.name} />

    </section>

    <section className={styles.adoptionForm}>
        <h2>Apply to Adopt {petProfile.name}</h2>
        <form>
            <div>
                <label>Your First Name:</label>
                <input type='text'id='first_name'>                  
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









 </div>
)
}
