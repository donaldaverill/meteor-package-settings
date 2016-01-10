Package.describe({
  name: 'fourquet:settings',
  version: '0.0.1',
  summary: 'Simple settings management for Meteor',
  git: 'https://github.com/fourquet/meteor-package-settings.git',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
  'check',
  'fourquet:utils@0.0.1',
];

const files = [
  'settings.js',
  'start.js',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages, 'server');
  api.imply(packages, 'server');
  api.addFiles(files, 'server');
  api.export('Settings', 'server');
});
