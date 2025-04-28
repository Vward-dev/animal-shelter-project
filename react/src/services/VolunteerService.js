import axios from "axios";

// const http= axios.create({
//     baseURL: 'http://localhost:9000/',
//     headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//     }
// });

    
export default {

    getAllVolunteers(){
        return axios.get('volunteer')
    },

    getVolunteerId(id){
        return axios.get(`volunteer/${id}`)
    },

    addVolunteer(volunteer){
        return axios.post('volunteer', volunteer)

    },

    updateVolunteer(volunteer){
        return axios.put(`volunteer/${volunteer.id}`, volunteer)
    },

    deleteVolunteer(id){
        return axios.delete(`volunteer/${id}`)
    },

    getPendingVolunteers(){
        return axios.get(`volunteer/pending`)
    },

    approveVolunteer(volunteer){
        return axios.put(`volunteer/approve/${volunteer.id}`, volunteer)
    },

    denyVolunteer(volunteer){
        return axios.put(`volunteer/deny/${volunteer.id}`, volunteer)
    },

};

