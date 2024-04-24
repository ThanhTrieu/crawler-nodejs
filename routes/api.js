const express = require("express");
const route = express.Router();

const crawler = require("../http/controllers/crawlerController")

// root route
route.post("/coffe-price", crawler.coffePrice);
route.post("/coffe-robusta", crawler.coffeRobusta);
route.post("/coffe-arabica", crawler.coffeArabica);
route.post("/coffe-arabica-braxin", crawler.coffeArabicaBraxin);
route.post("/oil-price", crawler.oilPrice);
route.post("/world-oil-prices", crawler.worldOilPrices);
// route.post("/exchange-rate", crawler.exchangeRate);

// register another routes here

module.exports = route;