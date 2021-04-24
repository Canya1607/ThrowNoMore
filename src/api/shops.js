import appAPI from '.';

export const getShops = () => {
  return appAPI.get('/get_shops');
}

export const getOffers = (id) => {
  return appAPI.get(`/get_offers/${id}`);
}