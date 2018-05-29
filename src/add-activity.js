import fp from 'mostly-func';

/**
 * add and copy activities to feeds
 */
export default async function addActivity (app, activity, ...feeds) {
  const svcFeedsActivities = app.service('feeds/activities');
  feeds = fp.uniq(fp.flatten(feeds));

  // aggregated feed do not support cc, first feed should be a flat feed
  const first = fp.find(fp.eqBy(getFeedType, 'flat'), feeds);
  const tail = fp.without([first], feeds);

  // carbon copy to tail feeds
  activity.cc = (activity.cc || []).concat(tail);
  return svcFeedsActivities.create(activity, { primary: first });
}
