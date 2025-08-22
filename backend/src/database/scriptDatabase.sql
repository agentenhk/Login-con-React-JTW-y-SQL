	CREATE DATABASE IF NOT EXISTS Login;
	USE Login;

CREATE TABLE IF NOT EXISTS login (
  username VARCHAR(50) NOT NULL PRIMARY KEY,
  password VARCHAR(50) NOT NULL
);

	INSERT INTO login (username, password) VALUES
	('user1', 'password1'),
	('user2', 'password2'),
	('user3', 'password3'),
	('user4', 'password4'),
	('user5', 'password5');

