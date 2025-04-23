import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:9000/'
});


export default {

    getAllPets(searchString) {
        if (searchString) {
            return http.get(`pet?search=${searchString}`)
        } else {
            return http.get('pet')
        }
    },

    getPetId(id) {
        return http.get(`pet/${id}`)
    },

    createPet(pet) {
        return http.post('pet', pet)
    }




};