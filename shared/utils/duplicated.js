const projectList = require("../constants/projects");
const localeList = require("../constants/locales");
var readlineSync = require("readline-sync");

module.exports.printDuplicatedValues = function () {
  project = readlineSync.keyInSelect(projectList, "Which project?");
  locale = readlineSync.keyInSelect(localeList, "Which locale?");

  const translations = require(`../../projects/${projectList[project]}/${localeList[locale]}`);
  const duplicatedList = [];
  const translationValues = Object.values(translations);

  translationValues.forEach(translation => {
    const numberOfRepetitions = translationValues.filter(item => translation === item).length;
    const listAlreadyContainsTranslation = duplicatedList.some(item => item.value === translation);

    if (numberOfRepetitions > 1 && !listAlreadyContainsTranslation) {
      duplicatedList.push({
        count: numberOfRepetitions,
        value: translation,
      });
    }
  });

  console.log(`\nProject: ${projectList[project]} | Locale: ${localeList[locale]}`);
  console.table(
    duplicatedList.sort((a, b) => (a.count > b.count ? 1 : b.count > a.count ? -1 : 0)).reverse(),
  );
};

module.exports.printDuplicatedKey = function () {
  project = readlineSync.keyInSelect(projectList, "Which project?");
  locale = readlineSync.keyInSelect(localeList, "Which locale?");
  value = readlineSync.question("What is the value? ");

  const translations = require(`../../projects/${projectList[project]}/${localeList[locale]}`);
  const keysList = [];
  const translationKeys = Object.keys(translations);
  const translationValues = Object.values(translations);

  translationValues.forEach((item, i) => {
    if (item === value) keysList.push(translationKeys[i]);
  });

  console.log(
    `\nProject: ${projectList[project]} | Locale: ${localeList[locale]} | Value: ${value}`,
    keysList,
  );
};
