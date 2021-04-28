const logError = (project, key, locale) =>
  console.error(`Missing key in "${project}": "${key}" for locale: "${locale}"`);

const logEmpty = (project, key, locale) =>
  console.error(`Empty key in "${project}": "${key}" for locale: "${locale}"`);

module.exports = { logError, logEmpty };
