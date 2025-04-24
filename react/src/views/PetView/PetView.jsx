import { useState, useEffect } from 'react';
import PetService from '../../services/PetService';
import { useParams } from 'react-router-dom';
import PetComponent from '../../components/PetComponent/PetComponent';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from './PetView.module.css'

export default function PetView() {

    const [errorMessage, setErrorMessage] = useState('');
    const [pet, setPet] = useState([]);
    //const [searchedPet, setSearchedPet] = useState(null);

    function getPet(searchText) {
        PetService.getAllPets(searchText)
            .then((response) => {
                setPet(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(`Received an error message from the server: ${error.response.status}`);
                } else if (error.request) {
                    setErrorMessage('No response from the server')
                } else {
                    setErrorMessage('An error occurred while creating request');
                }
            })
    }

    // function getPetById() {
    //     PetService.getPetId(id)
    //         .then((response) => {
    //             setSearchedPet(response.data);
    //         })
    //         .catch((error) => {
    //             if (error.response) {
    //                 setErrorMessage(`Received an error message from the server: ${error.response.status}`);
    //             } else if (error.request) {
    //                 setErrorMessage('No response from the server');
    //             } else {
    //                 setErrorMessage('An error occurred while creating request');
    //             }
    //         })
    // }

    useEffect(() => {
        getPet();
        //getPetById();
    }, [])

    return (

        <div className={styles.petViewContainer}>
            
            <div className={styles.PetsSearchBar}>{errorMessage}</div>
            <header className={styles.PetHeader}>
                <h1>Pets For Adoption</h1>
                <SearchBox searchFunction={getPet} />
            </header>


         
            <div className={styles.PetCardGrid}>
                {pet.map((pet) => (
                    <PetComponent pet={pet} ></PetComponent>
                ))}
                       
            </div>
           
        </div>

    )


}