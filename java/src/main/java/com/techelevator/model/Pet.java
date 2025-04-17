package com.techelevator.model;

public class Pet {

    private int id;
    private String name;
    private String species;
    private int age;
    private String sex;
    private String breed;
    private String description;

    private int adoptionStatus;

    private String photo;

    public Pet(){

    }

    public Pet(int id, String name, String species, int age, String sex, String breed, String description, int adoptionStatus, String photo) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.age = age;
        this.sex = sex;
        this.breed = breed;
        this.description = description;
        this.adoptionStatus = adoptionStatus;
        this.photo = photo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAdoptionStatus() {
        return adoptionStatus;
    }

    public void setAdoptionStatus(int adoptionStatus) {
        this.adoptionStatus = adoptionStatus;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
