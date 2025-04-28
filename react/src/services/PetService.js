import axios from "axios";

// const http = axios.create({
//     baseURL: 'http://localhost:9000/'
// });


export default {

    getAllPets(searchString) {
        if (searchString) {
            return axios.get(`pet?search=${searchString}`)
        } else {
            return axios.get('pet')
        }
    },

    getPetId(id) {
        return axios.get(`pet/${id}`)
    },

    createPet(pet) {
        return axios.post('pet', pet)
    },

    updatePetListing(pet) {
        return axios.put(`pet/${pet.id}`, pet)
    },




};