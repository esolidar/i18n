const { logDuplicated, getAllTranslationsByProject } = require("./tests");
const projectList = require("../constants/projects");

const whiteList = ["May"];

projectList.forEach(project => {
  const translations = getAllTranslationsByProject(project);
  const localesList = Object.keys(translations);

  test(`${project}: there are no duplicated translations in any locale`, () => {
    const duplicatedList = [];

    localesList.forEach(locale => {
      const translationValues = Object.values(translations[locale]);

      translationValues.forEach(value => {
        if (whiteList.includes(value)) return;
        if (duplicatedList.flat().includes(value)) return;

        const isItemDuplicated =
          translationValues.filter(translation => translation === value).length > 1;
        if (isItemDuplicated) duplicatedList.push([value, locale]);
      });
    });

    if (duplicatedList.length)
      duplicatedList.forEach(([value, locale]) => logDuplicated(project, value, locale));
    expect(duplicatedList.length).toBe(0);
  });
});
