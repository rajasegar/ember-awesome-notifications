import Ember from 'ember';
import layout from '../templates/components/ea-notification-container';

export default Ember.Component.extend({
  layout,
  notifications: Ember.inject.service('ea-notification')
});
