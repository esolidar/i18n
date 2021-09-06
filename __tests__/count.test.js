const { getAllTranslationsByProject } = require("../shared/utils/tests");
const projectList = require("../shared/constants/projects");

projectList.forEach(project => {
  const translations = getAllTranslationsByProject(project);
  const localesList = Object.keys(translations);

  test(`${project}: equal number of translations for every locale`, () => {
    const translationsLengths = {};
    let hasError = false;

    localesList.forEach(locale => {
      translationsLengths[locale] = Object.keys(translations[locale]).length;
    });

    const lengthsArray = Object.values(translationsLengths);

    lengthsArray.forEach((item, i) => {
      if (i > 0 && item !== lengthsArray[i - 1]) {
        hasError = true;
        return;
      }
    });

    if (hasError) console.error(project, translationsLengths);
    expect(hasError).toBe(false);
  });
});
