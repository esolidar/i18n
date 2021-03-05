const alerts = require("./alerts.json");
const auctions = require("./auctions.json");
const buttons = require("./buttons.json");
const companies = require("./companies.json");
const countries = require("./countries.json");
const crowdfundings = require("./crowdfundings.json");
const forms = require("./forms.json");
const institutions = require("./institutions.json");
const leftMenu = require("./leftMenu.json");
const login = require("./login.json");
const main = require("./main.json");
const requests = require("./requests.json");
const tickets = require("./tickets.json");

const translation = Object.assign(
  alerts,
  auctions,
  buttons,
  companies,
  countries,
  crowdfundings,
  forms,
  institutions,
  leftMenu,
  login,
  main,
  requests,
  tickets,
);

module.exports = translation;
