package com.techelevator.Service;

import com.techelevator.dao.PetDao;
import com.techelevator.model.Pet;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PetService {

    private final PetDao petDao;

    public PetService (PetDao petDao) {
        this.petDao = petDao;
    }

     public Pet createPet(Pet pet) {
         return petDao.createPet(pet);

     }

     public List<Pet> getPets(){
        return petDao.getPets();
     }

     public List<Pet> filterPets(String filterString){
        return petDao.filterPets(filterString, true);
     }

     public Pet getPetById(int id){
        return petDao.getPetById(id);
     }

     public Pet updatePet(Pet pet) {
        return petDao.updatePet(pet);
     }

     public int deletePetById(int id) {
        return petDao.deletePetById(id);
     }
}

