# Daily challenge

## Code

```sql
-- 1+2
-- drop table daily4_orders;
-- drop table daily4_orders;
CREATE table daily4_orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);
CREATE TABLE daily4_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    price INT,
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES daily4_orders (id)
);

INSERT INTO daily4_orders(name) VALUES ('Val'), ('Pitt'), ('Anna'), ('John');


INSERT INTO daily4_items(name, price, order_id) VALUES
('Small desk', 100, 1),
('Large desk', 300, 2),
('Fan', 80, 1);


-- 3
-- drop function total_price;
CREATE OR REPLACE FUNCTION total_price(input_order_id INT)
RETURNS INT AS $total_price$
DECLARE
    price INT;
BEGIN
   SELECT sum(daily4_items.price) OVER (PARTITION BY daily4_orders.id)
   FROM daily4_items
   INNER JOIN daily4_orders
   ON daily4_orders.id = daily4_items.order_id
   WHERE daily4_items.order_id = input_order_id INTO price;
   RETURN price;
END;
$total_price$
LANGUAGE plpgsql;

SELECT name, total_price(id) FROM daily4_orders;

```