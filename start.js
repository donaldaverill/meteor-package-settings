Meteor.startup(() => {
  let siteName = '';
  try {
    if (Settings && Settings.appSettingsObj) {
      let checkPattern = Settings.appSettingsObj;
      siteName = Meteor.settings &&
        Meteor.settings.public &&
        Meteor.settings.public.siteName;
      check(Meteor.settings, checkPattern);
    } else {
      throw new Meteor.Error('no-settings-defined',
        'Please define Settings.appSettingsObj on the server.');
    }
  } catch (e) {
    if (e) {
      console.error(e.message);
    } else {
      console.warn(
        'Please set METEOR_SETTINGS or ' +
        'start meteor with --settings and include ' +
        'all the required fields.'
      );
    }
    process.exit(1);
  }
  if (Utils.Server.isDev()) {
    const HR = Utils.repeat('_', 45);
    console.log('Settings Loaded'.red);
    console.log(HR.blue);
    console.log(siteName.grey);
    return console.log(HR.green);
  }
});
