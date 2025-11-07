create DATabase crud;
use crud;
show TABLES;

-- Create a table --
create table students(
    id int PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    roll_no VARCHAR(30)
)


-- Syntax to create a table 
-- CREATE Table table_name(
--     column_name1 datatype constraint,
--     column_name2 datatype constraint,
--     column_name3 datatype constraint,
    
-- )

--This command is use to show tables in database
Show TABLES;

-- Insert values in a Table (only one record)
INSERT INTO students 
VALUES
(110837, "Muzzamal", "ashrafmuzzamal7@gmail.com", "");

-- Insert values in a Table (more then 1 records record)

INSERT INTO students 
VALUES
(110855, "Imran", "imran@gmail.com", "110837"),
(110840, "Aakif", "aakif@gmail.com", "110840");


SELECT * FROM students;

SELECT name FROM students;
select id, name from students;