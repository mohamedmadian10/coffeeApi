const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const coffeeMachinesRouter = require("./Routes/coffeeMachinesRouter");
const coffeePodsRouter = require("./Routes/coffeePodsRouter");

// open server
const app = express();
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect("mongodb://localhost:27017/coffeeDataBase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected ..."))
  .catch((error) => console.log(error));

// setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//routing
app.use("/api", coffeeMachinesRouter);
app.use("/api", coffeePodsRouter);

app.listen(process.env.Port || 3000, () => {
  console.log("am Listenning .......");
});
