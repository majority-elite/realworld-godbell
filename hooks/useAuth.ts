import { userContext } from 'contexts/user';
import { useContext } from 'react';

export const useAuth = () => {
  return useContext(userContext);
};
