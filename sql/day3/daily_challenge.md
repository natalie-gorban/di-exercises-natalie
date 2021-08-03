# Homework

## Daily Challenge

```sql
--1
create table book_language (
    id serial primary key,
    language varchar
);

create table book_name (
    id serial primary key,
    book_name varchar,
    language_id integer,
    foreign key (language_id) references book_language(id)
);

create table book_review (
    id serial primary key,
    book_id integer,
    review text,
    foreign key (book_id) references book_name(id)
);

insert into book_language (language) values
('English'),
('Russian'),
('Hebrew'),
('Maori');

insert into book_name (book_name, language_id) values
('Buratino', 2),
('Torah', 3),
('JavaScript manual', 1),
('Empty book', null),
('Yad VaShem', 3),
('Empty papirus', null);

insert into book_review (book_id, review) values
(1, 'wooden nose'),
(2, 'shma israel'),
(3, 'no promises'),
(4, 'nothing to read'),
(4, 'once more nothing to read');


-- 2
-- 3 rows with unique language non-null language
select l.language, r.review, n.book_name
from book_language as l
inner join book_name as n
on n.language_id = l.id
inner join book_review as r
on r.book_id = n.id;

-- all records with non-null language
select l.language, r.review, n.book_name
from book_language as l
inner join book_name as n
on n.language_id = l.id
left join book_review as r
on r.book_id = n.id;

-- wrong join (book names are null), unique language
select l.language, r.review, n.book_name
from book_language as l
inner join book_name as n
on n.language_id = l.id
right join book_review as r
on r.book_id = n.id;

-- unique review
select l.language, r.review, n.book_name
from book_language as l
right join book_name as n
on n.language_id = l.id
left join book_review as r
on r.book_id = n.id;

-- every permutation
select l.language, r.review, n.book_name
from book_language as l
full join book_name as n
on n.language_id = l.id
full join book_review as r
on r.book_id = n.id;

Russian	  wooden nose	              Buratino
Hebrew	  shma israel	              Torah
English	  no promises	              JavaScript manual
NULL	  nothing to read	          Empty book
NULL	  once more nothing to read	  Empty book
Maori	  NULL	                      NULL
NULL	  NULL	                      Empty papirus
Hebrew	  NULL	                      Yad VaShem
```