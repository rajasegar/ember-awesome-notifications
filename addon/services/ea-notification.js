import Ember from 'ember';

const {
  A,
  ArrayProxy,
  assign,
  isEmpty,
  run
} = Ember;



const EANotificationService = ArrayProxy.extend({
  content: A(),

  init() {
    this._super(...arguments);
  },

  // Method for adding a notification
  addNotification(options) {
    // if no message is set, throw an error
    if(!options.message) {
      throw new Error('No notification message set');
    }

    const notification = Ember.Object.create({
      message: options.message,
      autoClear: (isEmpty(options.autoClear) ? false : options.autoClear),
      clearDuration: options.clearDuration || 5000,
      type: options.type,
      layout: options.layout,
      effect: options.effect
    });


    this.pushObject(notification);

    if(notification.autoClear) {
      notification.set('remaining', notification.get('clearDuration'));
      this.setupAutoClear(notification);
    }

    return notification;
  },

  setupAutoClear(notification) {
    notification.set('startTime', Date.now());

    const timer = run.later(this, () => {
      // Hasn't been closed manually
      if(this.indexOf(notification) >= 0) {
        this.removeNotification(notification);
      }
    }, notification.get('remaining'));

    notification.set('timer', timer);
  },

  removeNotification(notification) {
    if(!notification) {
      return;
    }

    notification.set('dismiss', true);

    // Delay removal from DOM for dismissal animation
    run.later(this, () => {
      this.removeObject(notification);
    }, 500);
  },



  info(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'info'
    },options));
  },

  success(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'success'
    },options));
  },

  warning(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'warning'
    },options));
  },

  danger(message, options) {
    return this.addNotification(assign({
      message: message,
      type: 'danger'
    },options));
  }

});

EANotificationService.reopenClass({
  isServiceFactory: true
});

export default EANotificationService;
