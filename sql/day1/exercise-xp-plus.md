# Homework

## Exercise XP+
```sql
CREATE DATABASE bootcamp;

CREATE TABLE IF NOT EXISTS students
(
    id SERIAL PRIMARY KEY,
	last_name VARCHAR,
	first_name VARCHAR,
	birth_date DATE
);


INSERT INTO students(first_name, last_name, birth_date) VALUES
('Mark', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simson', '1980-10-03'),
('Natalie', 'Gorban', '1983-09-16');

-- select 1
SELECT * FROM students;

--select 2
SELECT first_name, last_name FROM students;

--select 3.1
SELECT first_name, last_name FROM students WHERE id = 2;

--select 3.2
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Mark';

--select 3.3
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Mark';

--select 3.4
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

--select 3.5
SELECT first_name, last_name FROM students WHERE lower(first_name) LIKE 'a%';

--select 3.6
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

--select 3.7
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';

--select 3.8
SELECT first_name, last_name FROM students WHERE id IN (1,3);

--select 4
SELECT first_name, last_name,birth_date FROM students WHERE birth_date >= '2000-01-01';
```

