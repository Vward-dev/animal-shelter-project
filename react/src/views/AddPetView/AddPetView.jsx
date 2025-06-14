import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PetService from "../../services/PetService";
import styles from "./AddPetView.module.css";


export default function AddPetForm() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [description, setDescription] = useState("");
    const [breed, setBreed] = useState("");
    const [photo, setPhoto] = useState("");
    const [showApplicationForm, setShowApplicationForm] = useState(true);


    function initializeForm() {
        setName(name);
        setSpecies(species);
        setAge(age);
        setSex(sex);
        setDescription(description);
        setBreed(breed);
        setPhoto(photo);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const pet = {
            name: name,
            species: species,
            age: age,
            sex: sex,
            description: description,
            breed: breed,
            adoptionStatus: 1,
            photo: photo,

        }

        PetService.createPet(pet)
            .then(() => {
                setShowApplicationForm(false);
            })
            .catch((error) => {
                const response = error.response;
                alert('There was an error adding the pet to the database. Please try again later.');

            });
    }

    useEffect(() => {

        initializeForm();
    }, []);

    return (
        <>
            {showApplicationForm ? (
                <div>
                    <h1 className={styles.addPetHeader}>Add new pet</h1>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputField}>
                                <label htmlFor="name">Name: </label>
                                <input
                                    type="text"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="species">Species: </label>
                                <input
                                    type="text"
                                    id="species"
                                    onChange={(e) => setSpecies(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="age">Age: </label>
                                <input
                                    type="text"
                                    id="age"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="sex">Sex: </label>
                                <input
                                    type="text"
                                    id="sex"
                                    onChange={(e) => setSex(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="description">Description: </label>
                                <input
                                    type="text"
                                    id="description"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="breed">Breed: </label>
                                <input
                                    type="text"
                                    id="breed"
                                    onChange={(e) => setBreed(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="photo">Photo url: </label>
                                <input
                                    type="text"
                                    id="photo"
                                    onChange={(e) => setPhoto(e.target.value)}
                                />
                            </div>
                            <div>
                                <button className={styles.submitButton} type="submit">Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <h2>Pet added successfully!</h2>
            )}
        </>

    )
}