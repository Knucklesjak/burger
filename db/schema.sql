
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	date TIMESTAMP,
	-- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id));



INSERT INTO burgers (burger_name) VALUES ('Royale With Cheese');
INSERT INTO burgers (burger_name) VALUES ('Big Kahuna Burger');
INSERT INTO burgers (burger_name) VALUES ('Krabby Patty');
INSERT INTO burgers (burger_name) VALUES ('The Heart Clogger');