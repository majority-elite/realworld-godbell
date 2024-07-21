import React from 'react';
import { User } from '~/types/user';

export const userContext = React.createContext<User | null>(null);
