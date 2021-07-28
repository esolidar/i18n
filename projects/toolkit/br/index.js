const admin = require("../../admin/br");
const business = require("../../business/br");
const esolidar = require("../../esolidar/br");
const whitelabel = require("../../whitelabel/br");
const main = require("./main.json");

const translation = Object.assign(main, admin, business, esolidar, whitelabel);

module.exports = translation;
