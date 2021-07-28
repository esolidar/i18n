const admin = require("../../admin/en");
const business = require("../../business/en");
const esolidar = require("../../esolidar/en");
const whitelabel = require("../../whitelabel/en");
const main = require("./main.json");

const translation = Object.assign(main, admin, business, esolidar, whitelabel);

module.exports = translation;
