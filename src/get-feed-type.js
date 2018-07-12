module.exports = function getFeedType (id) {
  if (id.startsWith('aggregated')) return 'aggregated';
  if (id.startsWith('notification')) return 'notification';
  return 'flat';
};