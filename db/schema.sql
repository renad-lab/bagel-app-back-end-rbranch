-- Drop the database if it exists
DROP DATABASE IF EXISTS bagels_dev;

-- Create the database
CREATE DATABASE bagels_dev;

-- Connect to the database
\c bagels_dev;

-- Create the songs table with the required columns

CREATE TABLE bagels (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL,
    price INT NOT NULL,
    is_gluten_free BOOLEAN,
    is_available BOOLEAN
);

