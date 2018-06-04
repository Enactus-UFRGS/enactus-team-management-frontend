/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "ETM",
    short_name: "ETM",
    description: "",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/assets/images/enactusLogo192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/images/enactusLogo512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
