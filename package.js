Package.describe({
  name: 'fourquet:settings',
  version: '0.0.2',
  summary: 'Simple settings management for Meteor',
  git: 'https://github.com/fourquet/meteor-package-settings.git',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript@0.1.6',
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

Package.onTest(function(api) {
  api.use('ecmascript@0.1.6', ['server']);
  api.use('tinytest', ['server']);
  api.use(['fourquet:settings'], ['server']);
  api.addFiles('settings-tests.js', ['server']);
});
