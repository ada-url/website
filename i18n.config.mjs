const config = [
  {
    code: 'en',
    name: 'English',
    default: true,
  },
  {
    code: 'fr',
    name: 'Français',
  },
]

const getLocales = () => config.map(({ code }) => code)
const getDefaultLocale = () => config.find(({ default: isDefault }) => isDefault).code
const getLocaleName = (locale) => config.find(({ code }) => code === locale).name

const i18nConfig = {
  locales: getLocales(),
  defaultLocale: getDefaultLocale(),
}

export { getLocales, getDefaultLocale, getLocaleName }
export default i18nConfig
