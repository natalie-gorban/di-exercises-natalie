DROP TABLE city_info;
CREATE TABLE city_info(
	id SERIAL PRIMARY KEY, 
	timestamp VARCHAR,
	city VARCHAR,
	temperature VARCHAR,
	light VARCHAR,
	airquality_raw VARCHAR,
	sound VARCHAR,
	humidity VARCHAR,
	dust VARCHAR
);
COPY city_info(timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
FROM 'C:\\Downloads\\city_info.csv'
DELIMITER ','
CSV HEADER;