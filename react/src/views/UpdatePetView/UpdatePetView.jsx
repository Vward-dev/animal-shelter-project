import { useState, useEffect } from "react";
//import { Navigate } from "react-router-dom";
import PetService from "../../services/PetService";
import { useContext } from "react";
import { useParams } from "react-router-dom";
//import { UserContext } from "../../context/UserContext";

export default function UpdatePetListing({pet}) {
    
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
        const pet = {
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

        
        PetService.updatePetListing(pet)
            .then(() => {
                setShowApplicationForm(false);
            })
            .catch((error) => {
                const response = error.response;
                alert('There was an error updating the pet in the database. Please try again later.');

            });
    }

    useEffect(() => {

        initializeForm();
    }, []);


    return (
        <>
            {showApplicationForm ? (
                <div>
                    <h2>Update pet information</h2>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="species">Species: </label>
                            <input
                                type="text"
                                id="species"
                                onChange={(e) => setSpecies(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="age">Age: </label>
                            <input
                                type="text"
                                id="age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="sex">Sex: </label>
                            <input
                                type="text"
                                id="sex"
                                onChange={(e) => setSex(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description: </label>
                            <input
                                type="text"
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="breed">Breed: </label>
                            <input
                                type="text"
                                id="breed"
                                onChange={(e) => setBreed(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="photo">Photo url: </label>
                            <input
                                type="text"
                                id="photo"
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="adoptionStatus">Adoption Status: </label>
                            <input
                                type="text"
                                id="adoptionStatus"
                                onChange={(e) => setAdoptionStatus(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit">Submit</button>

                        </div>
                    </form>
                </div>
            ) : (
                <h2>Pet updated successfully!</h2>
            )}
        </>

    )

}