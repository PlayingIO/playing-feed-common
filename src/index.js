const addActivity = require('./add-activity');
const getFeedType = require('./get-feed-type');
const getPendingActivity = require('./get-pending-activity');
const updateActivityState = require('./update-activity-state');
const notify = require('./hooks/notify');

module.exports = {
  addActivity,
  getFeedType,
  getPendingActivity,
  notify,
  updateActivityState
};