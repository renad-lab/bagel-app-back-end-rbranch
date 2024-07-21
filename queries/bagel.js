const db = require("../db/dbConfig.js");

// Function to get all bagels with optional filtering and sorting
const getAllBagels = async (order = "asc", is_available) => {
  let query = "SELECT * FROM bagels";
  const params = [];

  if (is_available !== undefined) {
    query += " WHERE is_available = $1";
    params.push(is_available === "true"); // Convert string to boolean
  }

  if (order) {
    query += " ORDER BY name " + (order === "desc" ? "DESC" : "ASC");
  }

  try {
    const allBagels = await db.any(query, params);
    return allBagels;
  } catch (error) {
    return error;
  }
};

// Function to get a single bagel by ID
const getBagel = async (id) => {
  try {
    const oneBagel = await db.one("SELECT * FROM bagels WHERE id = $1", id);
    return oneBagel;
  } catch (error) {
    return error;
  }
};

// Function to create a new bagel
const createBagel = async (bagel) => {
  try {
    // Execute the SQL query with all the necessary fields
    const newBagel = await db.one(
      "INSERT INTO bagels (name, description, type, price, is_gluten_free, is_available) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        bagel.name,
        bagel.description,
        bagel.type || "SUGGESTED!", // Provide a default value for type if not provided
        bagel.price || 0.0, // Provide a default value for price if not provided
        bagel.is_gluten_free || false, // Provide a default value for is_gluten_free if not provided
        bagel.is_available || false, // Provide a default value for is_available if not provided
      ]
    );
    return newBagel;
  } catch (error) {
    console.error("Error creating bagel:", error);
    throw error; // Rethrow error to handle it where this function is called
  }
};

// Function to update an existing bagel
const updateBagel = async (id, bagel) => {
  try {
    const updatedBagel = await db.one(
      "UPDATE bagels SET name = $1, type = $2, description = $3, is_gluten_free = $4, is_available = $5 WHERE id = $6 RETURNING *",
      [
        bagel.name,
        bagel.type,
        bagel.description,
        bagel.is_gluten_free,
        bagel.is_available,
        id,
      ]
    );
    return updatedBagel;
  } catch (error) {
    return error;
  }
};

// Function to delete a bagel by ID
const deleteBagel = async (id) => {
  try {
    const deletedBagel = await db.one(
      "DELETE FROM bagels WHERE id = $1 RETURNING *",
      id
    );
    return deletedBagel;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBagels,
  getBagel,
  createBagel,
  updateBagel,
  deleteBagel,
};
