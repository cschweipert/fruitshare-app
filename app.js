// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost27017/fruitshareDB", {
  useNewUrlParser: true
});

const addressesSchema = {
  fruit: String,
  street: String,
  zip: Number,
  city: String,
  latitude: Number,
  longitude: Number
};

const Address = mongoose.model("Address", addressesSchema);

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
