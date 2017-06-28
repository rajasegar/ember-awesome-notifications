import Ember from 'ember';
import layout from '../templates/components/ea-notification';
import styles from  '../styles/components/ea-notification';

const {
  computed,
  inject: { service }
} = Ember;

export default Ember.Component.extend({
  layout,
  styles,
  notifications: service('ea-notification'),
  classNameBindings:[
    'boxClass',
    'layoutClass',
    'effectClass',
    'typeClass',
    'showClass'
  ],
  boxClass: computed(function() {
    return this.get('styles.ns-box');
  }),
  layoutClass: computed('notification.layout', function() {
    return this.get(`styles.ns-${this.get('notification.layout')}`);
  }),
  effectClass: computed('notification.effect', function() {
    return this.get(`styles.ns-effect-${this.get('notification.effect')}`);
  }),
  typeClass: computed('notification.type', function() {
    return this.get(`styles.ns-type-${this.get('notification.type')}`);
  }),
  showClass: computed('notification.dismiss', function() {
    return this.get('notification.dismiss') ? this.get('styles.ns-hide') : this.get('styles.ns-show');
  }),
  actions: {
    dismiss() {
      this.get('notifications').removeNotification(this.get('notification'));
    }
  }
});
