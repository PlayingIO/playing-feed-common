const makeDebug = require('debug');
const { errors } = require('feathers-errors');
const fp = require('mostly-func');

const addActivity = require('../add-activity');

const debug = makeDebug('playing:feed-services:hooks:notify');

module.exports = function notify (event, notifiers) {
  return async context => {
    if (notifiers[event]) {
      const notifer = notifiers[event](context);
      if (notifer) {
        const [activity, ...feeds] = notifer;
        if (activity && fp.isNotEmpty(feeds)) {
          await addActivity(context.app, activity, feeds);
          return context;
        }
      } else {
        debug(`Skip notifer '${event}' of service ${context.service.name}`);
      }
    } else {
      throw new Error('No such notifer found for ' + event);
    }
  };
};
