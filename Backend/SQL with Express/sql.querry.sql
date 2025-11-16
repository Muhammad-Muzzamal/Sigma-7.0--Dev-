SHOW DATABASES;
CREATE DATABASE complete;
USE complete;
CREATE TABLE user(
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    roll_no VARCHAR(10)
);
INSERT INTO user(name, roll_no)
VALUES ("Muhammad Muzzamal", 110837);
DROP TABLE `user`;

SELECT * FROM user;

SELECT COUNT(*) AS "total_users" FROM user;

DELETE FROM user where id > 50;

