const express = require("express");
const bagels = express.Router();
const {
  getAllBagels,
  getBagel,
  createBagel,
  deleteBagel,
  updateBagel,
} = require("../queries/bagel");

// Index: localhost:4001/bagels/
bagels.get("/", async (req, res) => {
  try {
    const allBagels = await getAllBagels();
    if (allBagels.length > 0) {
      res.status(200).json(allBagels);
    } else {
      res.status(404).json({ error: "No bagels found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Show: localhost:4001/bagels/1
bagels.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bagel = await getBagel(id);
    if (bagel) {
      res.status(200).json(bagel);
    } else {
      res.status(404).json({ error: "Bagel Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create: localhost:4001/bagels/
bagels.post("/", async (req, res) => {
  try {
    const newBagel = await createBagel(req.body);
    res.status(201).json(newBagel);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete: localhost:4001/bagels/1
bagels.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBagel = await deleteBagel(id);
    if (deletedBagel) {
      res.status(200).json({ message: "Successfully deleted bagel." });
    } else {
      res.status(404).json({ error: "Bagel Not Found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update: localhost:4001/bagels/1
bagels.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBagel = await updateBagel(id, req.body);
    if (updatedBagel) {
      res.status(200).json(updatedBagel);
    } else {
      res.status(404).json({ error: "Bagel Not Found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = bagels;
