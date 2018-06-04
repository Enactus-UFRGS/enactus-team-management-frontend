export default {
  name: 'i18n',
  initialize: function(instance) {
    let i18n = instance.lookup('service:i18n');

    i18n.set('locale', calculateLocale(i18n.get('locales')));
  }
}

function calculateLocale(locales) {
  // whatever you do to pick a locale for the user:
  const language = window.navigator ? window.navigator.languages[0] || window.navigator.language || window.navigator.userLanguage : 'en-us'

  return  locales.includes(language.toLowerCase()) ? language : 'en-us';
}
