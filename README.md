# ember-awesome-notifications

[![Build Status](https://travis-ci.org/rajasegar/ember-awesome-notifications.svg?branch=master)](https://travis-ci.org/rajasegar/ember-awesome-notifications) 
[![npm](https://img.shields.io/npm/dm/ember-awesome-notifications.svg)](https://www.npmjs.com/package/ember-awesome-notifications)
[![npm version](http://img.shields.io/npm/v/ember-awesome-notifications.svg?style=flat)](https://npmjs.org/package/ember-awesome-notifications "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![EmberObserver](http://emberobserver.com/badges/ember-awesome-notifications.svg?branch=master)](http://emberobserver.com/addons/ember-awesome-notifications)


Simple ideas & effects for Ember notifications

## Demo
Coming soon.

## Installation

```shell
ember install ember-awesome-notifications
```

## Usage

### Inject the service 
```js
notifications: Ember.inject.service('ea-notification'),
```

### Notification container in your templates
The notification container will work even without wormhole, but still we recommend it 
to be on the safer side for any UI breakages.

```hbs
{{#ember-wormhole to="ea-notification-container"}}
  {{ea-notification-container}}
{{/ember-wormhole}}
```

### Trigger the notification
```js
let _options = {
  effect: 'scale'
  layout: 'growl',
  type: 'info',
  message : '<p>This is just a simple notice. Everything is in order and this is a <a href="#">simple link</a>.</p>',
};

this.get('notifications').addNotification(_options);
```
## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
