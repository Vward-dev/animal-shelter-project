import { useState, useEffect } from 'react';
import styles from './PetComponent.module.css';

import PetService from '../../services/PetService';
import { Link, useParams } from 'react-router-dom';



export default function PetComponent({ pet }) {
    // let petNameClass = styles.petName;
    // if (pet.species === 'Dog') {
    //     petNameClass += ` ${styles.dogName}`;
    // } else if (pet.species === 'Cat') {
    //     petNameClass += ` ${styles.catName}`;
    // }

    const defaultPhoto = "src/assets/images/defaultPhoto.png";

    const[imageSrc, setImageSrc] = useState(pet.photo);
    const handleImageError = ev => {
        ev.target.src =  "src/assets/images/defaultPhoto.png";
    }




    const [errorMessage, setErrorMessage] = useState('');
    // const [pet, setPet] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function getPet() {
        setIsLoading(true);
        PetService.getAllPets()
            .then((response) => {
                setPet(response.data);
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

                  


                    {/* <section className={styles.petDetails}>
                        <p>
                            <span className={styles.petSpecies}>{pet.species}</span>
                        </p>
                        <p>
                            <span className={styles.petBreed} >{pet.breed}</span>
                        </p>

                        <p>
                            <span className={styles.petSex}>{pet.sex}</span>
                        </p>
                        <p>
                            <span className={styles.petAge}>{pet.age}</span>

                        </p>
                        <p>
                            <span className={styles.petDescription}>{pet.description}</span>
                        </p>
                    </section> */}
                    <div className={styles.nameContainer}>
                    <h1 className={styles.petName}>{pet.name}</h1>
                    </div>
                    <div className={styles.imageContainer}>
                    <img className={styles.petImage} src={pet.photo} alt={pet.name} onError={handleImageError}/>
                    </div>
                    
                    <footer >
                        <div id="bone-grouper">
                     
                            <Link to={`/pets/petProfile/${pet.id}`} >
                            <button  className={styles.adoptButton}>
                                <div className={styles.c1}></div>
                                <div className={styles.c2}></div>
                                <div className={styles.c3}></div>
                                <div className={styles.c4}></div>
                                <div className={styles.b1}>
                                    <div className={styles.b2}>
                                        Adopt Me
                                    </div>
                                    </div>
                               

                            </button>
                            </Link>
                       
                      
                            </div>
                    </footer>


                </article>
            )}

        </>

    )


}