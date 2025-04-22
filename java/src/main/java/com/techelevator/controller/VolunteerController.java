package com.techelevator.controller;

import com.techelevator.Service.VolunteerService;
import com.techelevator.dao.UserDao;
import com.techelevator.model.User;
import com.techelevator.model.Volunteer;
import jakarta.validation.Valid;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
@RequestMapping( path = "/volunteer")
public class VolunteerController {

    private VolunteerService volunteerService;
    private UserDao userDao;

    public VolunteerController(VolunteerService volunteerService, UserDao userDao) {
        this.volunteerService = volunteerService;
        this.userDao = userDao;
    }
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping( method = RequestMethod.GET)
    public List<Volunteer> getVolunteers() {

        List<Volunteer> volunteers = new ArrayList<>();
        volunteers = volunteerService.getVolunteers();

        return volunteers;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(path = "/pending" ,method = RequestMethod.GET)
    public List<Volunteer> getPendingVolunteers() {

        List<Volunteer> volunteers = new ArrayList<>();
        volunteers = volunteerService.getPendingVolunteers();

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


//        User user = userDao.getUserByUsername(principal.getName());
//
//        newVolunteer.setUserId(user.getId());

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
