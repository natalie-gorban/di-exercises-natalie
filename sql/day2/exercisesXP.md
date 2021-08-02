# Homework

## exercise 1
```sql
-- part 1
-- CREATE DATABASE homework;
-- -- part 2
-- CREATE TABLE public.items(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR,
-- 	price INTEGER
-- );
-- CREATE TABLE public.customers(
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR,
-- 	last_name VARCHAR
-- );
-- -- insert data 1
-- INSERT INTO public.items(name, price) VALUES
-- ('Small desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80);


INSERT INTO public.customers(first_name, last_name) VALUES
('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie','Johnson');
-- fetches

--1.1
SELECT * FROM items ORDER BY price;

--1.2
SELECT * FROM items ORDER BY price >= 80;

--1.3
SELECT last_name,first_name FROM customers ORDER BY last_name ASC;
--1.4
SELECT last_name FROM customers ORDER BY last_name DESC;

--2
-- DROP TABLE public.purchases;
CREATE TABLE public.purchases(
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    item_id INTEGER,
    FOREIGN KEY (customer_id) REFERENCES customers (id),
    FOREIGN KEY (item_id) REFERENCES items (id)
);

--2.1, 2.2
INSERT INTO public.purchases(customer_id, item_id) VALUES
(1,null),
(1,1),
(1,2),
(4,2),
(4,3);

--3.1 get map of references customer id to item id for each purchase
select * from public.purchases;

--3.2
select customers.first_name, customers.last_name, purchases.item_id
from customers
inner join purchases
on customers.id = purchases.customer_id;

--3.3
select item_id from purchases where customer_id = 4;

--3.4
select purchases.customer_id, items.name
from purchases
inner join items
on purchases.item_id = items.id
where items.id in (1,2);

--4
insert into customers(first_name, last_name) values ('Scott', 'Scott');
insert into items(name, price) values ('Hard Drive', '500');
insert into purchases(customer_id, item_id) values (
    (select id from customers where first_name='Scott' and last_name='Scott' limit 1),
    (select id from items where name='Hard Drive' limit 1)
);

--5
select c.first_name, c.last_name, i.name
from purchases as p
inner join customers as c
on c.id = p.customer_id
inner join items as i
on i.id = p.item_id;
```

## Exercise 2

```sql
--1
select * from customer;

--2
select concat(first_name, ', ', last_name) as full_name from customer;

--3
select distinct create_date from customer;

```
