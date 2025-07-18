package com.techelevator.dao;

import com.techelevator.model.Pet;
import com.techelevator.model.Volunteer;

import java.util.List;

public interface VolunteerDao {

    List<Volunteer> getVolunteers();

    List<Volunteer> getPendingVolunteers();

    Volunteer getVolunteerById(int id);

    Volunteer createVolunteer(Volunteer volunteer);

    Volunteer updateVolunteer(Volunteer volunteer);

    Volunteer approveVolunteer(Volunteer volunteer);

    Volunteer denyVolunteer(Volunteer volunteer);

    int deleteVolunteerById(int id);
    List<Volunteer> filterVolunteers (String searchTerm, boolean useWildCard);


}
