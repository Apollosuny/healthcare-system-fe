/* eslint-disable */
import { healthInfomations } from '@/data/health-information';

export const getHealthInformation = async (): Promise<any[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(healthInfomations);
    }, 3000);
  });
};
