const axios = require("axios");
const cheerio = require("cheerio");

const URLsToVisit = "https://webtygia.com/";

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

// const exchangeRate = async (req, res) => {
//   const url = `${URLsToVisit}gia-ca-thi-truong/gia-ca-phe.html`;
//   const pageHTML = await axios.get(url);
//   // initializing cheerio on the current webpage
//   const $ = cheerio.load(pageHTML.data);
//   let data = [];
//   const element = $('aside.sidebar > aside.widget-popular-posts:first');
//   const price  = $(element).find('div.alert span.result').text().trim();
//   const date = $(element).find('div.alert span.date_result').text().trim();
//   const bank = $(element).find('div.alert p.text-danger:nth(2)').text().trim();
//   const message = "1usd = vnd"

//   data.push({  price, date, bank, message });
//   res.json({data});
// }

module.exports = {
  coffePrice,
  coffeRobusta,
  coffeArabica,
  coffeArabicaBraxin,
  oilPrice,
  worldOilPrices,
  //exchangeRate
};
