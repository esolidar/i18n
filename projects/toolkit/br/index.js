const admin = require("../../admin/br");
const business = require("../../business/br");
const esolidar = require("../../esolidar/br");
const whitelabel = require("../../whitelabel/br");

const translation = Object.assign(admin, business, esolidar, whitelabel);

module.exports = translation;
