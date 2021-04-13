const admin = require("../../admin/pt");
const business = require("../../business/pt");
const whitelabel = require("../../whitelabel/pt");

const translation = Object.assign(admin, business, whitelabel);

module.exports = translation;
