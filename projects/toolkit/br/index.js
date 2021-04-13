const admin = require("../../admin/br");
const business = require("../../business/br");
const whitelabel = require("../../whitelabel/br");

const translation = Object.assign(admin, business, whitelabel);

module.exports = translation;
