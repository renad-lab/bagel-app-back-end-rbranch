const checkName = (req, res, next) => {
  // Check if the body of the request contains a key called 'name' and that it's a string
  if (typeof req.body.name === "string" && req.body.name.trim() !== "") {
    return next();
  } else {
    res
      .status(400)
      .json({ error: "Bagel name is required and must be a string" });
  }
};

const checkPrice = (req, res, next) => {
  // Check if the price is a number and greater than 0
  if (typeof req.body.price === "number" && req.body.price > 0) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: "Price must be a number and greater than 0" });
  }
};

const checkGlutenFree = (req, res, next) => {
  // Check if 'is_gluten_free' is a boolean
  if (typeof req.body.is_gluten_free === "boolean") {
    return next();
  } else {
    res.status(400).json({ error: "Gluten Free must be a boolean" });
  }
};

const checkAvailable = (req, res, next) => {
  // Check if 'is_available' is a boolean
  if (typeof req.body.is_available === "boolean") {
    return next();
  } else {
    res.status(400).json({ error: "Availability must be a boolean" });
  }
};

module.exports = { checkName, checkPrice, checkGlutenFree, checkAvailable };
