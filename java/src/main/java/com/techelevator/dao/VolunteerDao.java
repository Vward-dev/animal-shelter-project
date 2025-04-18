package com.techelevator.dao;

import com.techelevator.model.Pet;
import com.techelevator.model.Volunteer;

import java.util.List;

public interface VolunteerDao {

    List<Volunteer> getVolunteers();

    Volunteer getVolunteerById(int id);

    Volunteer createVolunteer(Volunteer volunteer);

    Volunteer updateVolunteer(Volunteer volunteer);

    int deleteVolunteerById(int id);
}
