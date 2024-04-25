const axios = require("axios");
const cheerio = require("cheerio");

const URLsToVisit = "https://webtygia.com/";

if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;
  
      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return i;
        }
      }
      return -1;
    };
  }

const coffePrice = async (req, res) => {
  const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('div.blog__content  div.table-responsive:first > table:first > tbody > tr').each((index, element) => {
    const province = $(element).find('td:first').text().trim();
    const price  = $(element).find('td:nth-child(2)').text().trim();
    const change = $(element).find('td:nth-child(3)').text().trim();
    data.push({ province, price, change });
  });
  res.json({data});
};

const coffeRobusta = async (req, res) => {
  const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('div.blog__content div.table-responsive:nth(1) table tbody tr').each((index, element) => {
    const date = $(element).find('td:first').text().trim();
    const matchingPrice  = $(element).find('td:nth-child(2)').text().trim();
    const change = $(element).find('td:nth-child(3)').text().trim();
    const percent =  $(element).find('td:nth-child(4)').text().trim();
    const quantity = $(element).find('td:nth-child(5)').text().trim();
    const highest = $(element).find('td:nth-child(6)').text().trim();
    const lowest = $(element).find('td:nth-child(7)').text().trim();
    const open = $(element).find('td:nth-child(8)').text().trim();
    const yesterday = $(element).find('td:nth-child(9)').text().trim();
    const openContract = $(element).find('td:nth-child(10)').text().trim();

    data.push({ date, matchingPrice, change, percent, quantity, highest, lowest, open, yesterday, openContract });
  });
  res.json({data});
};

const coffeArabica = async (req, res) => {
  const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('div.blog__content div.table-responsive:nth(2) table tbody tr').each((index, element) => {
    const date = $(element).find('td:first').text().trim();
    const matchingPrice  = $(element).find('td:nth-child(2)').text().trim();
    const change = $(element).find('td:nth-child(3)').text().trim();
    const percent =  $(element).find('td:nth-child(4)').text().trim();
    const quantity = $(element).find('td:nth-child(5)').text().trim();
    const highest = $(element).find('td:nth-child(6)').text().trim();
    const lowest = $(element).find('td:nth-child(7)').text().trim();
    const open = $(element).find('td:nth-child(8)').text().trim();
    const yesterday = $(element).find('td:nth-child(9)').text().trim();
    const openContract = $(element).find('td:nth-child(10)').text().trim();

    data.push({ date, matchingPrice, change, percent, quantity, highest, lowest, open, yesterday, openContract });
  });
  res.json({data});
};

const coffeArabicaBraxin = async (req, res) => {
  const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('div.blog__content div.table-responsive:nth(3) table tbody tr').each((index, element) => {
    const date = $(element).find('td:first').text().trim();
    const matchingPrice  = $(element).find('td:nth-child(2)').text().trim();
    const change = $(element).find('td:nth-child(3)').text().trim();
    const percent =  $(element).find('td:nth-child(4)').text().trim();
    const quantity = $(element).find('td:nth-child(5)').text().trim();
    const highest = $(element).find('td:nth-child(6)').text().trim();
    const lowest = $(element).find('td:nth-child(7)').text().trim();
    const open = $(element).find('td:nth-child(8)').text().trim();
    const yesterday = $(element).find('td:nth-child(9)').text().trim();
    const openContract = $(element).find('td:nth-child(10)').text().trim();

    data.push({ date, matchingPrice, change, percent, quantity, highest, lowest, open, yesterday, openContract });
  });
  res.json({data});
};

const oilPrice = async(req, res) => {
  const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('aside.sidebar aside.widget-popular-posts:nth(1) table tbody tr').each((index, element) => {
    const oilProduct = $(element).find('td:first').text().trim();
    const priceZone_1  = $(element).find('td:nth-child(2)').text().trim();
    const priceZone_2 = $(element).find('td:nth-child(3)').text().trim();

    data.push({ oilProduct, priceZone_1, priceZone_2 });
  });
  res.json({data});
}

const worldOilPrices = async(req, res) => {
  const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('aside.sidebar aside.widget-popular-posts:nth(2) table tbody tr').each((index, element) => {
    const oil = $(element).find('td:first').text().trim();
    const price  = $(element).find('td:nth-child(2)').text().trim();
    const increaseAndDecrease = $(element).find('td:nth-child(3)').text().trim();
    const percent = $(element).find('td:nth-child(4)').text().trim();

    data.push({ oil, price, increaseAndDecrease, percent });
  });
  res.json({data});
}

const exchangeRateVietcomBank = async (req, res) => {
  const url = `${URLsToVisit}ty-gia/vietcombank.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('#myTable tbody tr:not(:last-child)').each((index, element) => {
    const name = $(element).find('td:first a.currency-icon').attr('title');
    const key  = $(element).find('td:first a.currency-icon').text().trim();

    const buyingPriceTag = $(element).find('td:nth-child(2) span').parent().contents();
    const buyingPrice = $(buyingPriceTag[Array.prototype.findIndex.call(buyingPriceTag,function(elem){return $(elem).is($('td'));})+1]).text().replace(/\n/g,'').trim();
    const buyingPriceUp = $(element).find('td:nth-child(2) span.text-success.small').text().trim();
    const buyingPriceDown = $(element).find('td:nth-child(2) span.text-danger.small').text().trim();
    const buyingPriceNotChange = $(element).find('td:nth-child(2) span.text-warning.small').text().trim();

    const sellingPriceTag =  $(element).find('td:nth-child(3) span').parent().contents();
    const sellingPrice = $(sellingPriceTag[Array.prototype.findIndex.call(sellingPriceTag,function(elem){return $(elem).is($('td'));})+1]).text().replace(/\n/g,'').trim();
    const sellingPriceUp =  $(element).find('td:nth-child(3) span.text-success.small').text().trim();
    const sellingPriceDown =  $(element).find('td:nth-child(3) span.text-danger.small').text().trim();
    const sellingPriceNotChange = $(element).find('td:nth-child(3) span.text-warning.small').text().trim();

    const transferPriceTag =  $(element).find('td:nth-child(4) span').parent().contents();
    const transferPrice = $(transferPriceTag[Array.prototype.findIndex.call(transferPriceTag,function(elem){return $(elem).is($('td'));})+1]).text().replace(/\n/g,'').trim();
    const transferPriceUp =  $(element).find('td:nth-child(4) span.text-success.small').text().trim();
    const transferPriceDown =  $(element).find('td:nth-child(4) span.text-danger.small').text().trim();
    const transferPriceNotChange = $(element).find('td:nth-child(4) span.text-warning.small').text().trim();
    const currencyName = $(element).find('td:nth-child(5)').text().trim();


    data.push({  name, key, buyingPrice, buyingPriceUp, buyingPriceDown, buyingPriceNotChange, sellingPrice, sellingPriceUp, sellingPriceDown, sellingPriceNotChange, transferPrice, transferPriceUp, transferPriceDown, transferPriceNotChange, currencyName });
  });
  res.json({data});
}

const goldPriceDoji = async (req, res) => {
  const url = `${URLsToVisit}gia-vang.html`;
  const pageHTML = await axios.get(url);
  // initializing cheerio on the current webpage
  const $ = cheerio.load(pageHTML.data);
  let data = [];
  $('div.blog__content div.table-responsive:first table tbody tr:not(:last-child)').each((index, element) => {
    const system = $(element).find('td:first').text().trim();
    const type  = $(element).find('td:nth-child(2)').text().trim();

    const buyingPriceTag = $(element).find('td:nth-child(3) span').parent().contents();
    const buyingPrice = $(buyingPriceTag[Array.prototype.findIndex.call(buyingPriceTag,function(elem){return $(elem).is($('td'));})+1]).text().replace(/\n/g,'').trim();
    const buyingPriceUp = $(element).find('td:nth-child(3) span.text-success.small').text().trim();
    const buyingPriceDown = $(element).find('td:nth-child(3) span.text-danger.small').text().trim();
    const buyingPriceNotChange = $(element).find('td:nth-child(3) span.text-warning.small').text().trim();

    const sellingPriceTag =  $(element).find('td:nth-child(4) span').parent().contents();
    const sellingPrice = $(sellingPriceTag[Array.prototype.findIndex.call(sellingPriceTag,function(elem){return $(elem).is($('td'));})+1]).text().replace(/\n/g,'').trim();
    const sellingPriceUp =  $(element).find('td:nth-child(4) span.text-success.small').text().trim();
    const sellingPriceDown =  $(element).find('td:nth-child(4) span.text-danger.small').text().trim();
    const sellingPriceNotChange = $(element).find('td:nth-child(4) span.text-warning.small').text().trim();

    data.push({ system, type, buyingPrice, buyingPriceUp, buyingPriceDown, buyingPriceNotChange, sellingPrice, sellingPriceUp, sellingPriceDown, sellingPriceNotChange });
  });
  res.json({data});
}

module.exports = {
  coffePrice,
  coffeRobusta,
  coffeArabica,
  coffeArabicaBraxin,
  oilPrice,
  worldOilPrices,
  goldPriceDoji,
  exchangeRateVietcomBank,
};
