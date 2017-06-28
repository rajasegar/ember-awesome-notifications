import Ember from 'ember';

const {
  computed,
  Controller,
  inject: { service }
} = Ember;

const effectsLayoutMap = {
  'scale': 'growl',
  'jelly': 'growl',
  'slide': 'growl',
  'genie': 'growl',
  'flip': 'attached',
  'bouncyflip': 'attached',
  'slidetop': 'bar',
  'exploader': 'bar',
  'cornerexpand': 'other',
  'loadingcircle': 'other',
  'boxspinner': 'other',
  'thumbslider': 'other'
};

const effectsMessageMap = {
  'scale': '<p>This is just a simple notice. Everything is in order and this is a <a href="#">simple link</a>.</p>',
	'jelly' : '<p>Hello there! I\'m a classic notification but I have some elastic jelliness thanks to <a href="http://bouncejs.com/">bounce.js</a>. </p>',
	'slide' : '<p>This notification has slight elasticity to it thanks to <a href="http://bouncejs.com/">bounce.js</a>.</p>',
	'genie' : '<p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
	'flip' : '<p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
	'bouncyflip' : '<span class="icon icon-calendar"></span><p>The event was added to your calendar. Check out all your events in your <a href="#">event overview</a>.</p>',
	'slidetop' : '<span class="icon icon-megaphone"></span><p>You have some interesting news in your inbox. Go <a href="#">check it out</a> now.</p>',
	'exploader' : '<span class="icon icon-settings"></span><p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
	'cornerexpand' : '<p><span class="icon icon-bulb"></span> I\'m appaering in a morphed shape thanks to <a href="http://snapsvg.io/">Snap.svg</a></p>',
	'loadingcircle' : '<p>Whatever you did, it was successful!</p>',
	'boxspinner' : '<p>I am using a beautiful spinner from <a href="http://tobiasahlin.com/spinkit/">SpinKit</a></p>',
	'thumbslider' : '<div class="ns-thumb"><img src="img/user1.jpg"/></div><div class="ns-content"><p><a href="#">Zoe Moulder</a> accepted your invitation.</p></div>'
};


export default Controller.extend({
  notifications: service('ea-notification'),
  effect: 'scale',
  typeOptions: ['info','success','warning','danger'],
  notificationType: 'info',
  layout: computed('effect', function() {
    return effectsLayoutMap[this.get('effect')];
  }),
  notificationMessage: computed('effect', function() {
    return effectsMessageMap[this.get('effect')];
  }),

  actions: {
    showNotification() {
      console.log("show notification");  // eslint-disable-line

      let _options = {
        effect: this.get('effect'),
        layout: this.get('layout'),
        type: this.get('notificationType'),
        message: Ember.String.htmlSafe(this.get('notificationMessage'))
      };
      // this.get('notifications').warning('This is an info Notification', _options);
      this.get('notifications').addNotification(_options);
    }

  }
});
