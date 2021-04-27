const admin = require("../../admin/en");
const business = require("../../business/en");
const esolidar = require("../../esolidar/br");
const whitelabel = require("../../whitelabel/en");

const translation = Object.assign(admin, business, esolidar, whitelabel);

module.exports = translation;
