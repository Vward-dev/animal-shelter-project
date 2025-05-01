import { useState, useEffect } from "react";
//import { Navigate } from "react-router-dom";
import PetService from "../../services/PetService";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UpdatePetView.module.css";
//import { UserContext } from "../../context/UserContext";

export default function UpdatePetListing() {
    
    const [pet, setPet] = useState([]);
    
    //const navigate = useNavigate();
    const {id} = useParams();
    const [petId, setId] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [description, setDescription] = useState("");
    const [breed, setBreed] = useState("");
    const [photo, setPhoto] = useState("");
    const [showApplicationForm, setShowApplicationForm] = useState(true);
    const [adoptionStatus, setAdoptionStatus] = useState(0);
    const [showName, setShowName] = useState(true);
    const [showSpecies, setShowSpecies] = useState(true);
    const [showAge, setShowAge] = useState(true);
    const [showSex, setShowSex] = useState(true);
    const [showDescription, setShowDescription] = useState(true);
    const [showBreed, setShowBreed] = useState(true);
    const [showPhoto, setShowPhoto] = useState(true);
    const [showAdoptionStatus, setShowAdoptionStatus] = useState(true);

    function getCurrentPet() {
        PetService.getPetId(id)
        .then((response) => {
            setPet(response.data);
            setId(response.data.id);
            setName(response.data.name);
            setSpecies(response.data.species);
            setAge(response.data.age);
            setSex(response.data.sex);
            setDescription(response.data.description);
            setBreed(response.data.breed);
            setPhoto(response.data.photo);
            setAdoptionStatus(response.data.adoptionStatus);
        })
        .catch((error) => {
            if (error.response) {
                setErrorMessage(`Received an error message from the server: ${error.response.status}`);
            } else if (error.request) {
                setErrorMessage('No response from the server')
            } else {
                setErrorMessage('An error occurred while creating request');
            }
        })}

    function initializeForm() {
        
        setId(petId);
        setName(name);
        setSpecies(species);
        setAge(age);
        setSex(sex);
        setDescription(description);
        setBreed(breed);
        setPhoto(photo);
        setAdoptionStatus(adoptionStatus);
    }

    
    function handleSubmit(event) {
        event.preventDefault();
        const updatedPet = {
            id: id,
            name: name,
            species: species,
            age: age,
            sex: sex,
            description: description,
            breed: breed,
            adoptionStatus: adoptionStatus,
            photo: photo,

        }

        
        PetService.updatePetListing(updatedPet)
            .then(() => {
                setShowApplicationForm(false);
            })
            .catch((error) => {
                const response = error.response;
                alert('There was an error updating the pet in the database. Please try again later.');

            });
    }

    useEffect(() => {

        getCurrentPet();

        initializeForm();
    }, []);


    return (
        <>
            {showApplicationForm ? (
                <div>
                    <h2>Update pet information for {pet.name}</h2>

                    <form className={styles.editForm}onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            {showName ? (<button onClick={(e) => setShowName(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                            />)}                     
                        </div>
                        <div>
                            <label htmlFor="species">Species:</label>
                            {showSpecies ? (<button onClick={(e) => setShowSpecies(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="species"
                                onChange={(e) => setSpecies(e.target.value)}
                            />)}                     
                        </div>
                        <div>
                            <label htmlFor="age">Age:</label>
                            {showAge ? (<button onClick={(e) => setShowAge(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="age"
                                onChange={(e) => setAge(e.target.value)}
                            />)}
                        </div>
                        <div>
                            <label htmlFor="sex">Sex:</label>
                            {showSex ? (<button onClick={(e) => setShowSex(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="sex"
                                onChange={(e) => setSex(e.target.value)}
                            />)}
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            {showDescription ? (<button onClick={(e) => setShowDescription(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />)}
                        </div>
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            {showBreed ? (<button onClick={(e) => setShowBreed(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="breed"
                                onChange={(e) => setBreed(e.target.value)}
                            />)}
                        </div>
                        <div>
                            <label htmlFor="photo">Photo url:</label>
                            {showPhoto ? (<button onClick={(e) => setShowPhoto(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="photo"
                                onChange={(e) => setPhoto(e.target.value)}
                            />)}
                        </div>
                        <div>
                            <label htmlFor="adoptionStatus">Adoption Status:</label>
                            {showAdoptionStatus ? (<button onClick={(e) => setShowAdoptionStatus(false)}><FontAwesomeIcon icon="fas fa-pencil" style={{color: "#503530",}} /></button>) : 
                            (<input
                                type="text"
                                id="adoptionStatus"
                                onChange={(e) => setAdoptionStatus(e.target.value)}
                            />)}
                        </div>
                        <div>
                            <button className={styles.submitButton} type="submit">Submit</button>

                        </div>
                    </form>
                </div>
            ) : (
                <h2>Pet updated successfully!</h2>
            )}
        </>

    )

}