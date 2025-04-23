package com.techelevator.controller;


import com.techelevator.Service.PetService;
import com.techelevator.exception.DaoException;
import com.techelevator.model.Pet;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping( path = "/pet")  // ***is this the right base??

public class PetController {

    private PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @RequestMapping( method = RequestMethod.GET)
    public List<Pet> getPets(@RequestParam(defaultValue = "") String search) {

        List<Pet> pets = new ArrayList<>();

        try{
            if(search != null){
                pets = petService.filterPets(search);
            }else{
                pets = petService.getPets();
            }
        }catch (DaoException e){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }


        return pets;
    }

    @RequestMapping( method = RequestMethod.POST)
    public Pet createPet(@Valid @RequestBody Pet newPet) {
        Pet pet = null;

        pet = petService.createPet(newPet);

        return pet;
    }

    @RequestMapping ( path = "/{id}", method = RequestMethod.GET )  //??petId??
    public Pet getPetById(@PathVariable int id){
        Pet pet = null;

        pet = petService.getPetById(id);

        return pet;
    }

    @RequestMapping ( path = "/{id}", method = RequestMethod.PUT )
    public Pet updatePet(@PathVariable int id, @RequestBody Pet pet) {
        Pet updatedPet = null;

        updatedPet = petService.updatePet(pet);

        return updatedPet;
    }

    @RequestMapping ( path = "/{id}", method = RequestMethod.DELETE )
    public int deletePetById(@PathVariable int id) {
        int rowsAffected = petService.deletePetById(id);

        return rowsAffected;
    }




}
