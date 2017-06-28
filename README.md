# ember-awesome-notifications

Simple ideas & effects for Ember notifications

## Installation


```shell
ember install ember-awesome-notifications
```

## Usage

### Inject the service 
```js
notifications: Ember.inject.service('ea-notification'),
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
