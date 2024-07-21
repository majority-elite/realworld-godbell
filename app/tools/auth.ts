import { session } from './session';
import { sendRequest } from './request';
import { User } from '~/types/user';

const tokenKey = 'token';

export const getUser = async (): Promise<User | null> => {
  const currentSession = await session.getSession();

  if (!currentSession.get(tokenKey)) {
    currentSession.unset(tokenKey);
    await session.commitSession(currentSession);
    return null;
  }

  const profileResponse = await sendRequest({
    apiPath: '/user',
    method: 'GET',
  });
  const profile = await profileResponse.json();
  const { token, ...user } = profile;

  return user;
};
