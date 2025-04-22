import { useState, useEffect } from 'react';
import styles from './PetComponent.module.css';

import PetService from '../../services/PetService';
import { useParams } from 'react-router-dom';

export default function PetComponent( {pet} ) {
    let petNameClass = styles.petName;
    if (pet.species === 'Dog'){
        petNameClass += ` ${styles.dogName}`;
    }else if(pet.species === 'Cat') {
        petNameClass +=  ` ${styles.catName}`;
    }

   


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

 //useEffect(()=> {
   //  getPet();
 //},[]);

return (

<>
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <article className={styles.petComponent}>
            
         <h1 className={styles.petName}>{pet.name}</h1>
         

        <section className={styles.petDetails}>
         <p>
            <span className= {styles.petSpecies}>{pet.species}</span>
        </p>
         <p>
            <span className= {styles.petBreed} >{pet.breed}</span>
         </p>

         <p>
            <span className= {styles.petSex}>{pet.sex}</span>
         </p>
         <p>
            <span className={styles.petAge}>{pet.age}</span>

         </p>
         <p>
            <span className={styles.petDescription}>{pet.description}</span>
         </p>
         </section>

         <img src= {pet.photo}  alt = {pet.name} className={styles.petImage} />  
         
         <footer>
            <button className={styles.adoptButton}>Adopt Me</button>
         </footer>


        </article>
    )}

</>

)


}