package com.techelevator.Service;

import com.techelevator.dao.VolunteerDao;
import com.techelevator.model.Pet;
import com.techelevator.model.Volunteer;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class VolunteerService {

    private final VolunteerDao volunteerDao;

    public VolunteerService(VolunteerDao volunteerDao) {
        this.volunteerDao = volunteerDao;
    }

    public List<Volunteer> getVolunteers() {
        return volunteerDao.getVolunteers();
    }

    public  Volunteer getVolunteerById(int id) {
        return volunteerDao.getVolunteerById(id);
    }

    public Volunteer createVolunteer(Volunteer volunteer) {
        return volunteerDao.createVolunteer(volunteer);
    }

    public Volunteer updateVolunteer(Volunteer volunteer) {
        return volunteerDao.updateVolunteer(volunteer);
    }

    public int deleteVolunteerById(int id) {
        return volunteerDao.deleteVolunteerById(id);
    }

    public List<Volunteer> getPendingVolunteers() {
        return volunteerDao.getPendingVolunteers();
    }

    public Volunteer approveVolunteer(Volunteer volunteer) {
        return volunteerDao.approveVolunteer(volunteer);
    }

    public Volunteer denyVolunteer(Volunteer volunteer) {
        return volunteerDao.denyVolunteer(volunteer);
    }
}
