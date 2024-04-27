const express = require("express");
const route = express.Router();

const crawler = require("../http/controllers/crawlerController")

route.post("/coffe-price", crawler.coffePrice);
route.post("/coffe-robusta", crawler.coffeRobusta);
route.post("/coffe-arabica", crawler.coffeArabica);
route.post("/coffe-arabica-braxin", crawler.coffeArabicaBraxin);
route.post("/oil-price", crawler.oilPrice);
route.post("/world-oil-prices", crawler.worldOilPrices);
route.post("/gold-price-doji", crawler.goldPriceDoji);
route.post("/gold-price-btmc", crawler.goldPriceBTMC);
route.post("/gold-price-mi-hong", crawler.goldPriceMiHong);
route.post("/gold-price-ngoc-hai", crawler.goldPriceNgocHai);
route.post("/gold-price-sjc", crawler.goldPriceSJC);
route.post("/gold-price-pnj", crawler.goldPricePNJ);
route.post("/gold-price-ngoc-tham", crawler.goldPriceNgocTham);
route.post("/gold-price-sinh-dien", crawler.goldPriceSinhDien);
route.post("/exchange-rate-vietcombank", crawler.exchangeRateVietcomBank);


module.exports = route;
