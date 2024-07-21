import { createCookieSessionStorage } from '@remix-run/node';

const sessionSecret =
  process.env.NODE_ENV === 'production'
    ? (import.meta.env.VITE_SESSION_SECRET as string)
    : 'secret';

export const session = createCookieSessionStorage({
  cookie: {
    name: 'token',
    secrets: [sessionSecret],
    sameSite: 'lax',
  },
});
