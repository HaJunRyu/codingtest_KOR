import { customAxios } from '../lib';

export const getBeerList = async () => {
  const res = await customAxios.get('beers');
  return res.data;
};
