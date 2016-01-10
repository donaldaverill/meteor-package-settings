if (Meteor.isServer) {
  Settings.appSettingsObj = {
    public: Match.ObjectIncluding({
    })
  };
  Tinytest.add('Settings - defined on server', (test) => {
    test.notEqual(Settings, undefined, 'Expected ' +
      'Settings to be defined on the server.');
  });
}
