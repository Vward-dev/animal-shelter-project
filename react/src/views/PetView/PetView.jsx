import { useState, useEffect } from 'react';
import PetService from '../../services/PetService';
import { useParams } from 'react-router-dom';
import PetComponent from '../../components/PetComponent/PetComponent';

export default function PetView() {

    const [errorMessage, setErrorMessage] = useState('');
    const [pet, setPet] = useState([]);

    function getPet() {
        PetService.getAllPets()
        .then((response) => {
            setPet(response.data);
            console.log(response.data);
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
        getPet();
    }, [])

    return (

        <>
        <div>{errorMessage}</div>
        <h1>Pets For Adoption</h1>
        
        {pet.map((pet) => (
            <PetComponent pet = {pet}></PetComponent>
        ))}
        
        </>

    )


}