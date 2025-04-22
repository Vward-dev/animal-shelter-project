import axios from "axios";

const http= axios.create({
    baseURL: 'http://localhost:9000/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});

    
export default {

    getAllVolunteers(){
        return http.get('volunteer')
    },

    getVolunteerId(id){
        return http.get(`volunteer/${id}`)
    },

    addVolunteer(volunteer){
        return http.post('volunteer', volunteer)

    },

    updateVolunteer(volunteer){
        return http.put(`volunteer/${volunteer.id}`, volunteer)
    },

    deleteVolunteer(id){
        return http.delete(`volunteer/${id}`)
    },

    getPendingVolunteers(){
        return http.get(`volunteer/pending`)
    },

    approveVolunteer(volunteer){
        return http.put(`volunteer/approve/${volunteer.id}`, volunteer)
    },

    denyVolunteer(volunteer){
        return http.put(`volunteer/deny/${volunteer.id}`, volunteer)
    },

};

