const admin = require("../../admin/pt");
const business = require("../../business/pt");
const esolidar = require("../../esolidar/br");
const whitelabel = require("../../whitelabel/pt");

const translation = Object.assign(admin, business, esolidar, whitelabel);

module.exports = translation;
