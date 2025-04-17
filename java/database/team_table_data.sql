BEGIN TRANSACTION;

INSERT INTO pet (name, species, age, sex, description, breed, adoption_status_id, photo) VALUES ('king', 'dog', 2, 'M', 'pretty small dog', 'pug', 1, 'httpo.dog.com');
INSERT INTO volunteer (admin_status, first_name, last_name, email, phone, bio_desc, volunteer_status_id, user_id) VALUES ('FALSE', 'bob', 'bill', 'bill@yahoo.com', '915-981-8734', 'big bobs bio', 2, 2);
INSERT INTO volunteer (admin_status, first_name, last_name, email, phone, bio_desc, volunteer_status_id, user_id) VALUES ('true', 'lisa', 'frank', 'lisa@yahoo.com', '915-923-8734', 'boss lisa', 1, 1);

COMMIT TRANSACTION;