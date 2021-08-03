# Homework

## ExercisesXP

```sql
--1
SELECT name FROM language;

--2.1
SELECT film.title, film.description, language.name as language_name
FROM language
INNER JOIN film
ON language.language_id = film.language_id;

--2.2
SELECT language.name as language_name
FROM language;

--3
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR UNIQUE NOT NULL);

INSERT INTO new_film (name) VALUES
('Titanic'),
('Avatar');

--4
CREATE TABLE customer_review (
	id SERIAL PRIMARY KEY,
	film_id INTEGER,
	language_id INTEGER,
	title VARCHAR,
	score INTEGER,
	review_text TEXT,
	last_update DATE,
	FOREIGN KEY (film_id) REFERENCES new_film(id),
	FOREIGN KEY (language_id) REFERENCES language(language_id)
);

-- 5
INSERT INTO customer_review (film_id, language_id, score, last_update, title, review_text) VALUES
(1,1,10,'2020-10-10','Titanic review', 'The movie is very close to the real tragedy. It shows a beautiful love story with an extremely sad ending. The acting is first-rate. Leonardo Di Caprio`s and Kate Winslet`s performance is so brilliant that I cried during the whole movie.
This movie brings a tear to your eyes. If you want to cry and melt down to a glamurous love story, I strongly recommend that you watch this movie. Titanic is well worth seeing.');
```