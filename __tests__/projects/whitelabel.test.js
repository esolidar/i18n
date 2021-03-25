const translations = {
  br: require("../../projects/whitelabel/br"),
  en: require("../../projects/whitelabel/en"),
  pt: require("../../projects/whitelabel/pt"),
};

const errorList = [];
const logError = (key, locale) => console.error(`Missing key: "${key}" for locale: "${locale}"`);

beforeAll(() => {
  const enTranslationKeys = Object.keys(translations.en);
  const localesList = Object.keys(translations);

  enTranslationKeys.forEach(key => {
    localesList.forEach(locale => {
      if (locale === "en") return;
      if (!translations[locale].hasOwnProperty(key)) errorList.push([key, locale]);
    });
  });
});

test("whitelabel: error list must be empty", () => {
  if (errorList.length) errorList.forEach(([key, locale]) => logError(key, locale));
  expect(errorList.length).toBe(0);
});
