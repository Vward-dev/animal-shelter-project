BEGIN TRANSACTION;

INSERT INTO pet (name, species, age, sex, description, breed, adoption_status_id, photo) VALUES ('king', 'dog', 2, 'M', 'pretty small dog', 'pug', 1, 'https://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg');
INSERT INTO volunteer (admin_status, first_name, last_name, email, phone, bio_desc, volunteer_status_id, user_id) 
VALUES ('FALSE', 'bob', 'bill', 'bill@yahoo.com', '915-981-8734', 'big bobs bio', 2, 1),
	('true', 'lisa', 'frank', 'lisa@yahoo.com', '915-923-8734', 'boss lisa', 1, 2),
	('False', 'Olivia', 'Thompson', 'olive@gmail.com', '815-981-4574', 'I really love cats', 1, 1),
	('False', 'Liam', 'Kang', 'lieam@yahoo.com', '650-123-1569', 'Have zero pets at home', 1, 1),
	('False', 'Chuck', 'Testa', 'ctest@gmail.com', '360-258-7521', 'Taxedirmist', 1, 1),
	('False', 'Emma', 'Rob', 'em@gmail.com', '521-458-7532', 'loves animals', 2, 1);
	
INSERT INTO pet (
	
name,
species,
	age,
	sex,
	description,
	breed,
	adoption_status_id,
	photo
) VALUES (
'Chuck',
'Cat',
113,
'Male',
'He bites and solves crime',
'Grey',
1,
'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg/800px-IC_Blue_Melody_Flipper_CHA_male_EX1_CACIB.jpg'
),(
'Joe',
	'Dog',
	4,
	'Female',
	'Allergic to garlic',
	'Golden Retriever',
	1,
	'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg'
), (
	'Dingus',
	'Cat',
	7,
	'Male',
	'A really smart cat',
	'Orange',
	1,
	'https://www.rover.com/blog/wp-content/uploads/cat-breathing-fast-orange-kitten.jpg');
COMMIT TRANSACTION;

