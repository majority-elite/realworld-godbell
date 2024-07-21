import { userContext } from 'contexts/user';
import React, { FC } from 'react';
import { User } from '~/types/user';

interface Props {
  user: User | null;
  children: React.ReactNode;
}

export const UserProvider: FC<Props> = ({ user, children }) => {
  const { Provider } = userContext;

  return <Provider value={user}>{children}</Provider>;
};
