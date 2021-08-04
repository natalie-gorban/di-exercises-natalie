-- 1
SELECT first_name, last_name FROM employees;

--2
SELECT department_id FROM employees;

SELECT DISTINCT department_id FROM employees ORDER BY department_id;

--3
SELECT * FROM employees ORDER BY first_name DESC;

--4
SELECT first_name, last_name, salary, (salary * 0.15) AS PF FROM employees;

--5
SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC;

--6
SELECT SUM(salary) AS total_salary FROM employees;

--7
SELECT MAX(salary) AS maximum_salary, MIN(salary) AS minimum_salary FROM employees;

--8
SELECT AVG(salary) AS average_salary FROM employees;

--9
SELECT count (*) AS number_of_employees FROM employees;

--10
SELECT UPPER(first_name) FROM employees;

--11
SELECT LEFT(first_name, 3) FROM employees;

--12
SELECT first_name, last_name FROM employees;

--13
SELECT first_name, last_name, char_length(first_name) + char_length(last_name) AS length_of_full_name FROM employees;

--14
SELECT employees.first_name
FROM employees
WHERE first_name LIKE '%[^0-9]%';


--15
SELECT * FROM employees;
SELECT * FROM employees LIMIT 10;

--Restricting And Sorting

--1
SELECT first_name, last_name, salary FROM employees WHERE SALARY BETWEEN 10000 AND 15000;

--2
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31';

--3
SELECT * FROM employees WHERE first_name LIKE '%c%e%';

--4
--???

--5
SELECT last_name FROM employees WHERE char_length(last_name) = 6;

--6
SELECT last_name FROM employees WHERE first_name LIKE '%__e';

--7
--There are no jobs, designators columns in the employees table

--8
	SELECT * FROM employees WHERE last_name LIKE '%Jones%'
							   OR last_name LIKE '%Blake%'
							   OR last_name LIKE '%Scott%' 
						       OR last_name LIKE '%King%' 
						       OR last_name LIKE '%Ford%';