Package.describe({
  name: 'nathantreid:vue-css-modules',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'CSS modules compiler for akryum:vue-component using nathantreid:css-modules',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nathantreid/vue-css-modules',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'vue-css-modules',
  use: [
    'ecmascript@0.5.8',
    'nathantreid:css-modules@3.1.0',
  ],
  sources: [
    'vue-css-modules.js'
  ]
});
