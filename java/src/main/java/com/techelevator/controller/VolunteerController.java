package com.techelevator.controller;

import com.techelevator.Service.VolunteerService;
import com.techelevator.model.Volunteer;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping( path = "/volunteer")
public class VolunteerController {

    private VolunteerService volunteerService;

    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    @RequestMapping( method = RequestMethod.GET)
    public List<Volunteer> getVolunteers() {

        List<Volunteer> volunteers = new ArrayList<>();
        volunteers = volunteerService.getVolunteers();

        return volunteers;
    }

    @RequestMapping ( path = "/{id}", method = RequestMethod.GET )
    public Volunteer getVolunteerById(@PathVariable int id){
        Volunteer volunteer = null;

        volunteer = volunteerService.getVolunteerById(id);

        return volunteer;
    }

    @RequestMapping( method = RequestMethod.POST)
    public Volunteer createVolunteer(@Valid @RequestBody Volunteer newVolunteer) {
        Volunteer volunteer = null;

        volunteer = volunteerService.createVolunteer(newVolunteer);

        return volunteer;
    }

    @RequestMapping ( path = "/{id}", method = RequestMethod.PUT )
    public Volunteer updateVolunteer(@PathVariable int id, @RequestBody Volunteer volunteer) {
        Volunteer updatedVolunteer = null;

        updatedVolunteer = volunteerService.updateVolunteer(volunteer);

        return updatedVolunteer;
    }

    @RequestMapping ( path = "/{id}", method = RequestMethod.DELETE )
    public int deleteVolunteerById(@PathVariable int id) {
        int rowsAffected = volunteerService.deleteVolunteerById(id);

        return rowsAffected;
    }
}
