const { logEmpty, getAllTranslationsByProject } = require("../shared/utils/tests");
const projectList = require("../shared/constants/projects");

projectList.forEach(project => {
  const translations = getAllTranslationsByProject(project);
  const localesList = Object.keys(translations);

  test(`${project}: there are no empty translations in any locale`, () => {
    const emptyList = [];

    localesList.forEach(locale => {
      const translationKeys = Object.keys(translations[locale]);
      const translationValues = Object.values(translations[locale]);

      translationValues.forEach((item, i) => {
        if (item === "") emptyList.push([translationKeys[i], locale]);
      });
    });

    if (emptyList.length) emptyList.forEach(([key, locale]) => logEmpty(project, key, locale));
    expect(emptyList.length).toBe(0);
  });
});
