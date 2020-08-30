const express = require("express");
const coffeePodsRouter = express.Router();

const coffeePodsSchema = require("../models/coffeePodsModel");

//get All coffee Pods

coffeePodsRouter.get("/coffee_pods", (req, res) => {
  let queryMatch = {};
  let message = "All pods";
  //filter by product_type
  if (req.query.product_type) {
    queryMatch.product_type = req.query.product_type;
    message = req.query.product_type;
  }
  //filter by coffee flavor
  if (req.query.coffee_flavor) {
    queryMatch.coffee_flavor = req.query.coffee_flavor;
    message = req.query.coffee_flavor;
  }
  //filter by pack size
  if (req.query.pack_size) {
    queryMatch.pack_size = req.query.pack_size;
    message = req.query.pack_size;
  }
  coffeePodsSchema
    .find(queryMatch)
    // select only name
    // .select("name")
    .then((coffeePods) => {
      res.status(200).json({
        message,
        coffeePods,
      });
    })
    .catch((err) => {
      res.status(404).json({
        error: err,
      });
    });
});

module.exports = coffeePodsRouter;
