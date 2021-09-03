const { getAllTranslationsByProject } = require("../shared/utils/tests");
const projectList = require("../shared/constants/projects");

projectList.forEach(project => {
  const translations = getAllTranslationsByProject(project);
  const localesList = Object.keys(translations);

  test(`${project}: every key should exist in every locale`, () => {
    const errorList = [];

    localesList.forEach(lang => {
      const translationKeys = Object.keys(translations[lang]);

      translationKeys.forEach(key => {
        localesList.forEach(locale => {
          if (locale === lang) return;
          if (!translations[locale].hasOwnProperty(key)) errorList.push([key, locale]);
        });
      });

      if (errorList.length) errorList.forEach(([key, locale]) => logError(project, key, locale));
      expect(errorList.length).toBe(0);
    });
  });
});
