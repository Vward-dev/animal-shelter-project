package com.techelevator.controller;


import com.techelevator.Service.PetService;
import com.techelevator.model.Pet;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

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
    public List<Pet> getPets() {

        List<Pet> pets = new ArrayList<>();
        pets = petService.getPets();

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




}
