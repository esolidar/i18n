const admin = require("../../admin/pt");
const business = require("../../business/pt");
const esolidar = require("../../esolidar/pt");
const whitelabel = require("../../whitelabel/pt");
const main = require("./main.json");

const translation = Object.assign(main, admin, business, esolidar, whitelabel);

module.exports = translation;
