import fp from 'mostly-func';

/**
 * Update state of activities
 */
export default async function updateActivityState (app, activity) {
  const svcFeedsActivities = app.service('feeds/activities');
  const feeds = fp.reject(fp.isNil, [activity.feed].concat(activity.source || activity.cc));
  // update activity in all feeds by foreignId/time
  const updateAll = fp.map(feed => {
    return svcFeedsActivities.patch(null, {
      state: activity.state
    }, {
      primary: feed,
      query: { foreignId: activity.foreignId, time: activity.time }
    });
  });
  return Promise.all(updateAll(feeds));
}