if (Meteor.isClient) {
  Template.hello.helpers({
    siteName() {
      return Meteor.settings &&
        Meteor.settings.public &&
        Meteor.settings.public.siteName;
    }
  });
}

if (Meteor.isServer) {
  Settings.appSettingsObj = {
    public: Match.ObjectIncluding({
      siteName: String,
    }),
    emailDomain: String,
    kadira: {
      appId: String,
      appSecret: String,
    },
    google: {
      clientId: String,
      secret: String,
      loginStyle: String,
    },
  };
}
