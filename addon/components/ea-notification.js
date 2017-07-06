import Ember from 'ember';
import layout from '../templates/components/ea-notification';
import styles from  '../styles/components/ea-notification';

const {
  computed,
  inject: { service },
  run: { later },
  $
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
    'showClass',
    'hideClass'
  ],
  isLoadingCircle: computed.equal('notification.effect', 'loadingcircle'),
  isShow: true,
  isDismiss: false,
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
  showClass: computed('isShow', function() {
    return this.get('isShow') ? this.get('styles.ns-show'): null;
  }),
  hideClass: computed('isDismiss', function() {
    return this.get('isDismiss') ? this.get('styles.ns-hide') : null;
  }),
  didInsertElement() {
    this._super(...arguments);
  },
  willDestroyElement() {
    this._super(...arguments);
    this.$().on('animationend', () => {
      debugger
      $(this).removeClass(this.get('styles.ns-hide'));
    });
  },
  actions: {
    dismiss() {
      this.set('isShow', false);
      later(this, () => {
        this.set('isDismiss', true);
        this.get('notifications').removeNotification(this.get('notification'));
      }, 25);
    }
  }
});
