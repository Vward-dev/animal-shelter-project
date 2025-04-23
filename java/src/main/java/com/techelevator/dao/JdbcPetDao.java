package com.techelevator.dao;

import com.techelevator.exception.DaoException;
import com.techelevator.model.Pet;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcPetDao implements PetDao{

    private final JdbcTemplate jdbcTemplate;

    public JdbcPetDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Pet getPetById(int id) {
        Pet pet = null;

        // Query
        String sql = "SELECT * FROM pet WHERE id = ?";

        try{

            SqlRowSet results = jdbcTemplate.queryForRowSet(sql, id);
            if(results.next()) {
                pet = mapRowToPet(results);
            }
        }catch ( CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return pet;

        }


    public List<Pet> getPets (){
        List<Pet> pets = new ArrayList<>();

        // Query
        String sql = "SELECT * FROM pet";
        try {
            //
            SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
            while (results.next()) {
                Pet pet = mapRowToPet(results);
                pets.add(pet);
            }
        } catch (CannotGetJdbcConnectionException e) {
                throw new DaoException("Unable to connect to server or database", e);
            }
            return pets;
        }

        public List<Pet> filterPets(String searchTerm, boolean useWildCard) {

            List<Pet> pets = new ArrayList<>();

            String sql = "SELECT * FROM pet WHERE name ILIKE ? OR species ILIKE ? " +
                    "OR sex ILIKE ? OR breed ILIKE ?;";

            if(useWildCard){
                searchTerm = '%' + searchTerm + '%';
            }
            try{
                SqlRowSet results = jdbcTemplate.queryForRowSet(sql, searchTerm, searchTerm, searchTerm, searchTerm);
                while (results.next()){
                    Pet pet = mapRowToPet(results);
                    pets.add(pet);
                }
            }catch (CannotGetJdbcConnectionException e) {
                throw new DaoException("Unable to connect to server or database", e);
            }
            return pets;
        }


        public Pet createPet(Pet pet){

            Pet newPet = null;
            //Query
            String insertPetSql = "INSERT INTO pet (name, age, species, sex, description, breed, adoption_status_id, photo)" +
                    "VALUES (?,?,?,?,?,?,?,?) RETURNING id";

            try {
                // String insertUserSql = "INSERT INTO users (username, password_hash, role) values (LOWER(TRIM(?)), ?, ?) RETURNING user_id";
                int newPetId = jdbcTemplate.queryForObject(insertPetSql, int.class, pet.getName(), pet.getAge(),
                        pet.getSpecies(), pet.getSex(), pet.getDescription(), pet.getBreed(), pet.getAdoptionStatus(), pet.getPhoto());

                newPet = getPetById(newPetId);

            } catch (CannotGetJdbcConnectionException e) {
                throw new DaoException("Unable to connect to server or database", e);
            } catch (
                DataIntegrityViolationException e) {
                throw new DaoException("Data integrity violation", e);
            }
            return newPet;

        }

        public Pet updatePet(Pet updatedPet) {
        Pet newPet = null;

        String sql = "UPDATE pet SET name=?, species=?, age=?, sex=?, description=?, breed=?, adoption_status_id=?, photo=? WHERE id=?;";

            try {
                int rowsAffected = jdbcTemplate.update(sql, updatedPet.getName(), updatedPet.getSpecies(), updatedPet.getAge(),
                        updatedPet.getSex(), updatedPet.getDescription(), updatedPet.getBreed(), updatedPet.getAdoptionStatus(),
                        updatedPet.getPhoto(), updatedPet.getId());
                if (rowsAffected == 0) {
                    throw new DaoException("Zero rows affected, expected at least one");
                }
                newPet = getPetById(updatedPet.getId());
            } catch (CannotGetJdbcConnectionException e) {
                throw new DaoException("Unable to connect to server or database", e);
            } catch (DataIntegrityViolationException e) {
                throw new DaoException("Data integrity violation", e);
            }
            return newPet;
        }

        public int deletePetById(int id) {
            int numberOfRows = 0;
            String sql = "DELETE FROM pet WHERE id = ?";

            try {
                numberOfRows = jdbcTemplate.update(sql, id);
            } catch (CannotGetJdbcConnectionException e) {
                throw new DaoException("Unable to connect to server or database", e);
            } catch (DataIntegrityViolationException e) {
                throw new DaoException("Data integrity violation", e);
            }
            return numberOfRows;
        }

    private Pet mapRowToPet(SqlRowSet rowSet){
        Pet pet = new Pet();

        pet.setId(rowSet.getInt("id"));
        pet.setName(rowSet.getString("name"));
        pet.setAge(rowSet.getInt("age"));
        pet.setSpecies(rowSet.getString("species"));
        pet.setSex(rowSet.getString("sex"));
        pet.setDescription(rowSet.getString("description"));
        pet.setBreed(rowSet.getString("breed"));
        pet.setAdoptionStatus(rowSet.getInt("adoption_status_id"));
        pet.setPhoto(rowSet.getString("photo"));

        return pet;
    }


}
