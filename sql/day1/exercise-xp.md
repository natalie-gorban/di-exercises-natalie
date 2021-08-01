# Homework

## exercise 1
```sql
-- part 1
CREATE DATABASE homework;
-- part 2
CREATE TABLE public.items(
	id SERIAL PRIMARY KEY, 
	name VARCHAR, 
	price INTEGER
);
CREATE TABLE public.customers(
	id SERIAL PRIMARY KEY, 
	first_name VARCHAR,
	last_name VARCHAR
);
-- insert data 1
INSERT INTO public.items(name, price) VALUES
('Small desk', 100),
('Large desk', 300),
('Fan', 80);

-- insert data 2
INSERT INTO public.customers(first_name, last_name) VALUES
('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie','Johnson');
-- fetches

--3.1
SELECT * FROM public.items;

--3.2
SELECT * FROM public.items WHERE price > 80;

--3.3
SELECT * FROM public.items WHERE price <= 300;

--3.4
SELECT * FROM public.customers WHERE last_name='Smith';

--3.5
SELECT * FROM public.customers WHERE last_name='Jones';

--3.6
SELECT * FROM public.customers WHERE first_name != 'Scott';
```

