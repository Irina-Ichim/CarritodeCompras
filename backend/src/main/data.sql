CREATE TABLE product (
                         id SERIAL PRIMARY KEY,
                         name VARCHAR(255) NOT NULL,
                         description TEXT,
                         price DECIMAL(10, 2) NOT NULL,
                         image_url VARCHAR(255)
);

INSERT INTO product (name, description, price, image_url) VALUES
('Producto 1', 'Descripción del Producto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 19.99, 'Img/producto1.jpg'),
('Producto 2', 'Descripción del Producto 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 24.99, 'Img/producto2.jpg'),
('Producto 3', 'Descripción del Producto 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 29.99, 'Img/producto3.jpg'),
('Producto 4', 'Descripción del Producto 4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 14.99, 'Img/producto4.jpg');
