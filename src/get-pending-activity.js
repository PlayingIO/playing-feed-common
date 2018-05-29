import fp from 'mostly-func';

/**
 * Get pending state activities
 */
export default async function getPendingActivity (app, primary, id) {
  const svcFeedsActivities = app.service('feeds/activities');
  return await svcFeedsActivities.get(id, { primary, query: { state: 'PENDING' } });
}