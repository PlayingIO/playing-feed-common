const fp = require('mostly-func');

/**
 * Get pending state activities
 */
module.exports = async function getPendingActivity (app, primary, id) {
  const svcFeedsActivities = app.service('feeds/activities');
  return await svcFeedsActivities.get(id, { primary, query: { state: 'PENDING' } });
};