begin transaction;

drop table if exists pet, adoption_status, volunteer_status, volunteer;

CREATE TABLE adoption_status (
	adoption_status_id serial,
	description varchar(20) NOT NULL,
	
	CONSTRAINT PK_adoption_status PRIMARY KEY (adoption_status_id)
);

CREATE TABLE volunteer_status (
	volunteer_status_id SERIAL,
	description varchar(20) NOT NULL,
	
	
	CONSTRAINT PK_volunteer_status PRIMARY KEY (volunteer_status_id)
);

CREATE TABLE pet (
	id SERIAL,
	name varchar(50) NOT NULL,
	species varchar(50) NOT NULL,
	age int NOT NULL,
	sex varchar(10) NOT NULL,
	description text NOT NULL,
	breed varchar(200),
	adoption_status_id int NOT NULL,
	photo varchar(200) NOT NULL,
	
	CONSTRAINT PK_pet PRIMARY KEY (id),
	CONSTRAINT FK_pet FOREIGN KEY (adoption_status_id) REFERENCES adoption_status (adoption_status_id)
);


CREATE TABLE volunteer (
	volunteer_id serial,
	user_id int NOT NULL,
	admin_status boolean NOT NULL,
	first_name varchar(20) NOT NULL,
	last_name varchar(20) NOT NULL,
	email varchar(20) NOT NULL,
	phone varchar(20) NOT NULL,
	bio_desc text NOT NULL,
	volunteer_status_id int NOT NULL,
	
	CONSTRAINT PK_volunteer PRIMARY KEY (volunteer_id),
	CONSTRAINT FK_volunteer FOREIGN KEY (volunteer_status_id) REFERENCES volunteer_status (volunteer_status_id),
	CONSTRAINT FK_volunteer_user_id FOREIGN KEY (user_id) REFERENCES users (user_id)
	
);

INSERT INTO adoption_status (description) VALUES ('Pending');
INSERT INTO adoption_status (description) VALUES ('Approved');
INSERT INTO adoption_status (description) VALUES ('Available');

INSERT INTO volunteer_status (description) VALUES ('Pending');
INSERT INTO volunteer_status (description) VALUES ('Approved');
INSERT INTO volunteer_status (description) VALUES ('Rejected');

COMMIT TRANSACTION;