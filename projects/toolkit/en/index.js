const admin = require("../../admin/en");
const business = require("../../business/en");
const whitelabel = require("../../whitelabel/en");

const translation = Object.assign(admin, business, whitelabel);

module.exports = translation;
