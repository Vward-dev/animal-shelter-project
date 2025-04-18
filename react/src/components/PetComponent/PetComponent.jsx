import { useState, useEffect } from 'react';

import PetService from '../../services/PetService';
import { useParams } from 'react-router-dom';

export default function PetComponent( {pet} ) {

const [errorMessage, setErrorMessage] = useState('');
// const [pet, setPet] = useState([]);
const [isLoading, setIsLoading] = useState(false);

function getPet() {
    setIsLoading(true);
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
    .finally(() => {
        setIsLoading(false);
    })
}

// useEffect(()=> {
//     getPet();
// },[]);

return (

<>
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <>
         <h1>{pet.name}</h1>

         <p>
            <span>{pet.species}</span>
            <span>{pet.breed}</span>
         </p>

         <p>
            <span>{pet.sex}</span>
         </p>
         <p>
            <span>{pet.age}</span>

         </p>
         <p>
            <span>{pet.description}</span>
         </p>


        </>
    )}

</>

)


}