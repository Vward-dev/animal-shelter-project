import axios from "axios";

const http= axios.create({
    baseURL: 'http://localhost:9000/'
});


export default {

    getAllPets(){
        return http.get('pet')
    },

    getPetId(id){
        return http.get(`pet/${id}`)
    }




};