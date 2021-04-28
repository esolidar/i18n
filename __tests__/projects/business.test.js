const { logError, logEmpty } = require("../../shared/utils/tests");

const project = "business";

const translations = {
  br: require(`../../projects/${project}/br`),
  en: require(`../../projects/${project}/en`),
  pt: require(`../../projects/${project}/pt`),
};

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
