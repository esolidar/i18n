const logError = (project, key, locale) =>
  console.error(`Missing key in "${project}": "${key}" for locale: "${locale}"`);

const logEmpty = (project, key, locale) =>
  console.error(`Empty key in "${project}": "${key}" for locale: "${locale}"`);

const logDuplicated = (project, value, locale) =>
  console.error(`Duplicated key in "${project}": "${value}" for locale: "${locale}"`);

const logNaming = (project, value, locale) =>
  console.error(`Naming error in "${project}": "${value}" for locale: "${locale}"`);

const getAllTranslationsByProject = project => {
  return {
    br: require(`../../projects/${project}/br`),
    en: require(`../../projects/${project}/en`),
    pt: require(`../../projects/${project}/pt`),
  };
};

module.exports = { logError, logEmpty, logDuplicated, logNaming, getAllTranslationsByProject };
