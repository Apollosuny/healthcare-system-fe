/* eslint-disable */
import apolloAxios from './request';

export const getBMIStatistic = async (): Promise<any> => {
  const res = await apolloAxios.get('/client/bmi');
  return res;
};

export const getAverageBloodSugar = async (): Promise<any> => {
  const res = await apolloAxios.get('/client/average-blood-sugar');
  return res;
};

export const getClientData = async (search?: string): Promise<any> => {
  const res = await apolloAxios.get('/client', {
    params: {
      search,
    },
  });
  return res;
};
