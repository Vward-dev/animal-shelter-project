package com.techelevator.dao;

import com.techelevator.exception.DaoException;
import com.techelevator.model.Pet;
import com.techelevator.model.Volunteer;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcVolunteerDao implements VolunteerDao{

    private final JdbcTemplate jdbcTemplate;

    public JdbcVolunteerDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Volunteer> getVolunteers() {
        List<Volunteer> volunteers = new ArrayList<>();

        // Query
        String sql = "SELECT * FROM volunteer";
        try {
            //
            SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
            while (results.next()) {
                Volunteer volunteer = mapRowToVolunteer(results);
                volunteers.add(volunteer);
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return volunteers;
    }

    public Volunteer getVolunteerById(int id){
        Volunteer volunteer = null;

        // Query
        String sql = "SELECT * FROM volunteer WHERE volunteer_id = ?";

        try{

            SqlRowSet results = jdbcTemplate.queryForRowSet(sql, id);
            if(results.next()) {
                volunteer = mapRowToVolunteer(results);
            }
        }catch ( CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return volunteer;
    }

    public  List<Volunteer> getPendingVolunteers() {
        List<Volunteer> volunteers = new ArrayList<>();
        // Query
        String sql = "SELECT * FROM volunteer WHERE volunteer_status_id = 1";
        try {
            //
            SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
            while (results.next()) {
                Volunteer volunteer = mapRowToVolunteer(results);
                volunteers.add(volunteer);
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        }
        return volunteers;
    }



    public Volunteer createVolunteer(Volunteer volunteer) {
        Volunteer newVolunteer = null;
        //Query
        String sql = "INSERT INTO volunteer (user_id, admin_status, first_name, last_name, email, phone, bio_desc, volunteer_status_id)" +
                "VALUES (?,?,?,?,?,?,?,?) RETURNING volunteer_id";

        try {
            // String insertUserSql = "INSERT INTO users (username, password_hash, role) values (LOWER(TRIM(?)), ?, ?) RETURNING user_id";
            int newVolunteerId = jdbcTemplate.queryForObject(sql, int.class, volunteer.getUserId(), volunteer.isAdminStatus(),
                    volunteer.getFirstName(), volunteer.getLastName(), volunteer.getEmail(), volunteer.getPhoneNumber(), volunteer.getBioDescription(), volunteer.getStatusId());

            newVolunteer = getVolunteerById(newVolunteerId);

        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (
                DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }
        return newVolunteer;
    }

    public Volunteer updateVolunteer(Volunteer updatedVolunteer) {
        Volunteer newVolunteer = null;

        String sql = "UPDATE volunteer SET admin_status=?, first_name=?, last_name=?, email=?, phone=?, bio_desc=?, volunteer_status_id=?, WHERE volunteer_id=?;";

        try {
            int rowsAffected = jdbcTemplate.update(sql, updatedVolunteer.isAdminStatus(), updatedVolunteer.getFirstName(), updatedVolunteer.getLastName(),
                    updatedVolunteer.getEmail(), updatedVolunteer.getPhoneNumber(), updatedVolunteer.getBioDescription(), updatedVolunteer.getStatusId(),
                    updatedVolunteer.getId());
            if (rowsAffected == 0) {
                throw new DaoException("Zero rows affected, expected at least one");
            }
            newVolunteer = getVolunteerById(updatedVolunteer.getId());
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }
        return newVolunteer;
    }

    public int deleteVolunteerById(int id) {
        int numberOfRows = 0;
        String sql = "DELETE FROM volunteer WHERE volunteer_id = ?";

        try {
            numberOfRows = jdbcTemplate.update(sql, id);
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }
        return numberOfRows;
    }

    public Volunteer approveVolunteer(Volunteer updatedVolunteer){

        Volunteer newVolunteer = null;

        String sql = "UPDATE volunteer SET volunteer_status_id= 2 WHERE volunteer_id = ?;";

        try {
            int rowsAffected = jdbcTemplate.update(sql, updatedVolunteer.getId());
            if (rowsAffected == 0) {
                throw new DaoException("Zero rows affected, expected at least one");
            }
            newVolunteer = getVolunteerById(updatedVolunteer.getId());
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }
        return newVolunteer;
    }

    public Volunteer denyVolunteer(Volunteer updatedVolunteer){

        Volunteer newVolunteer = null;

        String sql = "UPDATE volunteer SET volunteer_status_id= 3 WHERE volunteer_id = ?;";

        try {
            int rowsAffected = jdbcTemplate.update(sql, updatedVolunteer.getId());
            if (rowsAffected == 0) {
                throw new DaoException("Zero rows affected, expected at least one");
            }
            newVolunteer = getVolunteerById(updatedVolunteer.getId());
        } catch (CannotGetJdbcConnectionException e) {
            throw new DaoException("Unable to connect to server or database", e);
        } catch (DataIntegrityViolationException e) {
            throw new DaoException("Data integrity violation", e);
        }
        return newVolunteer;
    }

    private Volunteer mapRowToVolunteer(SqlRowSet rowSet) {
        Volunteer volunteer = new Volunteer();

        volunteer.setId(rowSet.getInt("volunteer_id"));
        volunteer.setUserId(rowSet.getInt("user_id"));
        volunteer.setAdminStatus(rowSet.getBoolean("admin_status"));
        volunteer.setFirstName(rowSet.getString("first_name"));
        volunteer.setLastName(rowSet.getString("last_name"));
        volunteer.setEmail(rowSet.getString("email"));
        volunteer.setPhoneNumber(rowSet.getString("phone"));
        volunteer.setBioDescription(rowSet.getString("bio_desc"));
        volunteer.setStatusId(rowSet.getInt("volunteer_status_id"));

        return volunteer;
    }
}
