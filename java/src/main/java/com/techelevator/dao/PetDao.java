package com.techelevator.dao;

import com.techelevator.model.Pet;

import java.util.List;

public interface PetDao {

    List<Pet> getPets();

    Pet getPetById(int id);

    Pet createPet(Pet pet);

    Pet updatePet(Pet pet);

    int deletePetById(int id);


}
