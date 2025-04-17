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

     public Pet getPetById(int id){
        return petDao.getPetById(id);
     }
}

