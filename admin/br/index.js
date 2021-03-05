// import alerts from "./alerts.json";
// import auctions from "./auctions.json";
// import buttons from "./buttons.json";
// import companies from "./companies.json";
// import countries from "./countries.json";
// import crowdfundings from "./crowdfundings.json";
// import forms from "./forms.json";
// import institutions from "./institutions.json";
// import leftMenu from "./leftMenu.json";
// import login from "./login.json";
// import main from "./main.json";
// import requests from "./requests.json";
// import tickets from "./tickets.json";

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

export default translation;
