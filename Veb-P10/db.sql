CREATE DATABASE library;

\c library

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(100),
  published_year INTEGER
);

INSERT INTO books (title, author, published_year) VALUES
('Eneida', 'Ivan Kotliarevsky', 1798),
('1984', 'George Orwell', 1949);
