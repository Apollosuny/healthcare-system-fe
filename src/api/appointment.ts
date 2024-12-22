/* eslint-disable */
import { appointments } from '@/data/appointment';

export const getAppointments = async (): Promise<any[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(appointments);
    }, 3000);
  });
};
