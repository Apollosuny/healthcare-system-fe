import apolloAxios from './request';

export const signIn = async (
  username: string,
  password: string
): Promise<{ user: string }> => {
  const res = await apolloAxios.post('/auth/sign-in', {
    username,
    password,
  });
  return res.data;
};
