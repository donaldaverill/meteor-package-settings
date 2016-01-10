## Settings for Meteor [![Build Status](https://travis-ci.org/fourquet/meteor-package-settings.svg?branch=master)](https://travis-ci.org/fourquet/meteor-package-settings)

Simple settings management for Meteor. Define fields and require Meteor.settings to be set with either `METEOR_SETTINGS` environment variable or by passing a JSON file with the `--settings` option when starting Meteor.

## Install

    meteor add fourquet:settings

## Usage

On the server, define `Settings.appSettingsObj` as an object to match Meteor.settings against. A `Meteor.Error` will be thrown if the settings do not match and program will exit. See the [Check](http://docs.meteor.com/#/full/check) documentation for more details on matching.

On the server (***not*** in Meteor.startup):

```js
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
```
Matching settings.json
```json
{
  "public": {
    "siteName": "Settings Example"
  },
  "emailDomain": "example.com",
  "kadira": {
    "appId": "appId",
    "appSecret": "appSecret"
  },
  "google": {
    "clientId": "clientId",
    "secret": "secret",
    "loginStyle": "popup"
  }
}
```

#### Version
0.0.2

#### License
MIT
