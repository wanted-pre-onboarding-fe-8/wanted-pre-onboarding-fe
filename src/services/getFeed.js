import request from '../utils/helpers/api';

export const getFeed = async () => {
  return await request('/data/feeds.json');
};
