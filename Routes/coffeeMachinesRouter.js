const express = require("express");
const coffeeMachinesRouter = express.Router();

const coffeeMachineSchema = require("../models/coffeeMachinesModel");

//get All coffee machines

coffeeMachinesRouter.get("/coffee_machines", (req, res) => {
  let queryMatch = {};
  let message = "All machines";
  //filter by product_type
  if (req.query.product_type) {
    queryMatch.product_type = req.query.product_type;
    message = req.query.product_type;
  }
  //filter by water_line_compatible
  if (req.query.water_line_compatible) {
    queryMatch.water_line_compatible = req.query.water_line_compatible;
    message = "water line compatible";
  }
  coffeeMachineSchema
    .find(queryMatch)
    // select only name
    // .select("name")
    .then((coffeeMachines) => {
      res.status(200).json({
        message,
        coffeeMachines,
      });
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
});

module.exports = coffeeMachinesRouter;
