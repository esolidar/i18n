const { logNaming, getAllTranslationsByProject } = require("../shared/utils/tests");
const projectList = ["auction", "crowdfunding", "feed"];

projectList.forEach(project => {
  const translations = getAllTranslationsByProject(project);
  const localesList = Object.keys(translations);

  test(`${project}: there are no empty translations in any locale`, () => {
    const emptyList = [];

    localesList.forEach(locale => {
      const translationKeys = Object.keys(translations[locale]);

      translationKeys.forEach((item, i) => {
        if (!item.startsWith(project)) emptyList.push([translationKeys[i], locale]);
      });
    });

    if (emptyList.length) emptyList.forEach(([key, locale]) => logNaming(project, key, locale));
    expect(emptyList.length).toBe(0);
  });
});
