import { requests } from './requests';

const getSessionRequest = async (id: number) => {
  console.log(id)
  return requests
    .get('/joke/Any').then((res) => res).catch((error) => console.log(error))
};

export const apis = { getSessionRequest };
